import axios from 'axios'
import { DocumentPage, DocumentAnnotation, DocumentAlternateFormat, Document } from '../interfaces'
import { Md5 } from 'ts-md5/dist/md5'
import { loadSettings } from '../settings'
import { IIIFResolver } from './iiif-resolver/iiif-resolver'

export abstract class Resolver {

    locale: string = 'en'

    private _pages: DocumentPage[]

    async abstract init(url: string): Promise<this>

    title() { return this.getTitle() }
    abstract getTitle(): string

    document(): Document { return this.getDocument() }
    abstract getDocument(): Document

    pages(): DocumentPage[] {
        if (!this._pages) {
            this._pages = this.getPages()
        }
        return this._pages
    }
    protected abstract getPages(): DocumentPage[]

    annotations(): DocumentAnnotation[] {

        return this.getAnnotations().map((annotation) => ({
            ...annotation,
            id: this.getAnnotationId(annotation),
            visible: this.isAnnotationVisible(annotation)
        }))
    }
    protected abstract getAnnotations(): DocumentAnnotation[]

    alternateFormats(): DocumentAlternateFormat[] { return this.getAlternateFormats() }
    abstract getAlternateFormats(): DocumentAlternateFormat[]

    startPageIndex() { return this.getStartPageIndex() }
    abstract getStartPageIndex(): number

    getAnnotationId(annotation: DocumentAnnotation): string {

        if (!annotation) {
            return undefined
        }
        return new Md5().appendStr(annotation.name || '').end().toString()
    }

    isAnnotationVisible(annotation: DocumentAnnotation): boolean {

        if (!annotation) {
            return undefined
        }

        const annotationState = loadSettings().annotations
            .find(item => item.id == this.getAnnotationId(annotation))

        return (annotationState ? annotationState.visible : annotation.visible)
    }

    protected async httpGet(url: string) {

        return await axios.get(url)
    }

    static from(contentType: string): Resolver {
        return new IIIFResolver()
    }
}