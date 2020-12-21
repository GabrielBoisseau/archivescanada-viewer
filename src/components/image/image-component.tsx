import { Component, Prop, h, Element, Event, EventEmitter, Host, State, Method, Listen } from '@stencil/core';
import { Unsubscribe, Store } from '@stencil/redux';
import { viewItem } from '../../store/actions/viewport';
import { isNumber } from 'util';
import { resolveViewportType } from '../../utils/viewport';
import tippy, { sticky, Props, Instance } from 'tippy.js';
import { t } from '../../services/i18n-service';

import { selectCurrentItem } from '../../store/selectors/item';

@Component({
    tag: 'harmonized-image',
    styleUrl: 'image-component.scss'
})
export class ImageComponent {
    
    @Element() el: HTMLElement

    @Prop() src: string
    @Prop() contentType: string
    @Prop() srcset: string
    @Prop() preload: boolean = false
    @Prop({ reflect: true }) page: number
    @Prop() caption: string = "" // also title
    @Prop() showCaption: boolean
    @Prop() showTooltip: boolean

    @State() loading: boolean = false
    @State() loaded: boolean = false
    @State() failed: boolean = false
    @State() props: string[] = []

    @State() currentItem: DocumentPage
    @State() items: MyAppState["viewport"]["items"] = []

    viewItem: typeof viewItem
    storeUnsubscribe: Unsubscribe

    @State() currentItemIndex: number

    @Prop({ context: "store" }) store: Store

    @Event() imageAdded
    @Event() imageLoad

    private viewer: any;

    private tooltip: Instance<Props>

    @Method()
    async addImageProperty(value: string): Promise<void> {
        if (!this.props.find(prop => prop == value)) {
            this.props = [...this.props, value];
        }
    }

    @Method()
    async removeImageProperty(value: string): Promise<void> {
        if (this.props.find(prop => prop == value)) {
            this.props = this.props.filter(prop => prop != value);
        }
    }


    componentWillLoad() {

        this.store.mapDispatchToProps(this, { viewItem })
        this.storeUnsubscribe = this.store.mapStateToProps(this, (state: MyAppState) => {
            const {
                viewport: { itemIndex, items },
            } = state
            return {
                currentItemIndex: itemIndex,
                currentItem: selectCurrentItem(state),
                items
            }
        })
    }

    componentDidUnload() {
        this.storeUnsubscribe()
    }

    handleLoad(ev: Event) {
        this.loading = false
        this.loaded = true

        this.createTooltip()

        this.imageLoad.emit(ev)
    }

    handleError(ev: Event) {
        this.failed = true
        this.loading = false
        this.loaded = false
    }

    handleClick() {
        console.log(this.el);
        if (isNumber(this.page)) {
            if (this.contentType.includes('pdf')) {
                const eCopy = this.getImageTitle(this.src) + '.json'
                this.loadJsonData(eCopy);
            }
            else {
                this.viewItem(this.page)
            }
        }

    }

    //PDF Pages 
    async loadJsonData(url) {
        await fetch(url)
            .then(response => {
                if (!response.ok) {
                    this.viewItem(this.page);
                }
                return response.json();
            })
            .then(jsonResponse => {
                this.addPDFPageItems(jsonResponse);
            })
            .catch((error:Error) => {
                this.viewItem(this.page);
            });
    }

    addPDFPageItems(data: any) {
        if (data.images.length > 0) {
            data.images.forEach(element => {
                const title = this.getImageTitle(element.urlImage);                
                const item = this.items.find(s => s.image == element.urlImage);
                if (!this.isExist(item)) {
                    let pdfImage = {
                        id: this.currentItem.id,
                        contentType: 'image/jpeg',
                        label: this.setLabel(title),
                        image: element.urlImage,
                        tileSources: this.setTileSource(element.urlImage),
                        thumbnail: element.urlThumbnail,
                        metadata: this.currentItem.metadata,
                        height: element.height,
                        width: element.width,
                        parentEcopy: data.parentEcopy
                    } as DocumentPage;
                    this.items.push(pdfImage);
                }
            });
            this.viewItem(this.page)
         }
    }

    isExist(value) {
        if (typeof value === 'undefined') {
            return false;
        } else {
            return true;
        }
    }

    setLabel(value: string) {
        return [{
            "locale": "en",
            "value": value
        }, {
            "locale": "fr",
            "value": value
        }]
    }

    setTileSource(url: string): any {
        return { "type": "image", "url": url };
    }
    getImageTitle(imgUrl: string) {
        let title = '';
        const url = imgUrl.split('&');
        for (let x = 0; x < url.length; x++) {
            let item = url[x];
            if (item.includes('id')) {
                const items = item.split('=');
                title = items[1]
                break;
            }
        }
        return title;
    }
    //end PDF Pages 

    componentDidRender() {
        this.imageAdded.emit(this.el)
    }

    createTooltip() {
        if (!this.showTooltip) {
            return undefined
        }

        if (this.loaded && this.caption) {

            if (this.tooltip) {
                this.tooltip.destroy()
                this.tooltip = null
            }
            return this.tooltip = tippy(this.el, {
                appendTo: 'parent',
                theme: 'harmonized-dark',
                placement: 'bottom',
                distance: -5,
                animation: 'shift-toward',
                arrow: false,
                sticky: true,
                plugins: [sticky],
                content: this.caption
            })
        }
    }

    // Temporary thumbnail placeholder solution for pdf, audio and video content types.
    determineThumbnail(viewportType: string) {
        // Replace links with CDN hosted images pre-prod

        //console.log(`Rendering thumbnail for page ${this.page} with content type=${this.contentType} and src=${this.src}`);

        // No thumbnail placeholders
        if (this.src === null || this.src === '' || this.failed)
            return 'https://baclac.blob.core.windows.net/cdn/assets/placeholder-unavailable.jpeg';

        switch (viewportType) {
            case 'image':
                return this.src;

            case 'pdf':
                return 'https://baclac.blob.core.windows.net/cdn/assets/placeholder-pdf.jpeg';

            case 'video':
                return 'https://baclac.blob.core.windows.net/cdn/assets/placeholder-video.jpeg';

            case 'audio':
                return 'https://baclac.blob.core.windows.net/cdn/assets/placeholder-audio.jpeg';

            default:
                return 'https://baclac.blob.core.windows.net/cdn/assets/placeholder-unavailable.jpeg';
        }
    }

    render() {

        let className = 'mdc-image-list__item'

        if (this.loading) {
            className += ' is-loading'
        }
        else if (this.loaded) {
            className += ' is-loaded'
        }
        else if (this.failed) {
            className += ' is-error'
        }
        else {
            className += ' is-ghost'
        }

        if (this.page === this.currentItemIndex) {
            className += ' is-active'
        }

        const labelId = `label-page-${this.page}`

        const viewportType: string = resolveViewportType(this.contentType);
        const thumbnailSrc = this.determineThumbnail(viewportType);

        return <Host
            role="button"
            class={className}
            onClick={this.loaded && this.handleClick.bind(this)}
            title={this.caption == "" ? t('untitled') : this.caption}>

            <div class="mdc-image-list__image-aspect-container" role="list">
                <img
                    data-lazy-load
                    src={(this.preload && thumbnailSrc)}
                    data-src={thumbnailSrc}
                    alt={this.caption == "" ? t('untitled') : this.caption}
                    //srcset={(this.preload && this.srcset)}
                    class="mdc-image-list__image mdc-elevation--z2"
                    onLoad={this.handleLoad.bind(this)}
                    onError={this.handleError.bind(this)}
                    //aria-labelledby={labelId}
                    style={{
                        opacity: (this.loaded) ? '1' : '0'
                    }}
                    role="listitem"
                />

                <ul class="inv" role="listitem">
                    {this.props.map((prop) =>
                        <li>{prop}</li>
                    )}
                </ul>
            </div>

            {/*
                this.showCaption &&
                <div class="mdc-image-list__supporting">
                    <span id={labelId} class="mdc-image-list__label">
                        {this.loaded ? this.caption : <span innerHTML="&nbsp;"></span>}
                    </span>
                </div>
            */}

        </Host>
    }
}