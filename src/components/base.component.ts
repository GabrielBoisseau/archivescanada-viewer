import { HarmonizedViewer } from "..";

export class BaseComponent implements Component {

    instance: HarmonizedViewer;

    protected element: HTMLElement;

    constructor(instance: HarmonizedViewer) {

        this.instance = instance;
        this.instance.components.register(this);
    }

    create(): HTMLElement {
        return document.createElement('div');
    }

    getElement() {
        if (!this.element) {
            this.element = this.create();
        }
        return this.element;
    }

    addListener(event: string, selector?: string, listener?: (eventTarget: HTMLElement) => any): void {

        if (!event) {
            return undefined;
        }

        this.element.addEventListener(event, (event) => {

            const target = event.target as HTMLElement;

            if (selector) {

                // When a selector is provided, resolve the event target by filtering selected elements
                // Emit the event only when the event target can be resolved

                const selectorTarget = Array.from(this.element.querySelectorAll(selector))
                    .map(elem => elem as HTMLElement)
                    .find(elem => elem.isSameNode(target) || elem.contains(target));

                if (selectorTarget) {
                    return listener(selectorTarget);
                }

            }
            else {

                // Selector not provided, no filtering required
                return listener(target);

            }
        });
    }

    t(key: string): string {
        if (key && this.instance && this.instance.locale) {
            return this.instance.locale.t(key);
        }
    }

    protected uniqueid(): string {
        const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
        while (true) {

            let id = 'hv-';
            for (var i = 0; i < 4; i++) {
                id += chars.charAt(Math.floor(Math.random() * chars.length));
            }

            const element = document.getElementById(id);
            if (!element) {
                return id;
            }
        }
    }

}

export interface Component {
    instance: HarmonizedViewer;

    create(): HTMLElement;
    getElement(): HTMLElement;

    init?: () => Promise<void>;
    bind?: () => Promise<void>;
    load?: () => Promise<void>;
}