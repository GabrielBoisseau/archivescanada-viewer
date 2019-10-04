import i18n from "i18next";
import XHR from "i18next-xhr-backend";
import i18next from "i18next";
import { EventEmitter } from "events";
import { save, load } from "../utils/utils";

export class LocaleService {

    languageChanged: EventEmitter = new EventEmitter();

    private languages: string[] = ['en', 'fr'];

    async init() {

        var service = await i18n
            .use(XHR)
            .init({
                lng: load('language'),
                fallbackLng: this.languages,
                debug: true,
                backend: {
                    // for all available options read the backend's repository readme file
                    loadPath: '/locales/{{lng}}.json'
                }
            });

        i18next.on('languageChanged', (language: string) => {
            this.languageChanged.emit('languageChanged', language);
        });

        return service;
    }

    all() {
        return this.languages || [];
    }

    change(language: string) {
        if (!language) {
            return undefined;
        }
        i18next.changeLanguage(language);
        save('language', language);
    }

    get(): string {
        return i18next.language;
    }

    static resolve(language: string, available: string[]) {

        const exactMatch = available
            .find(x => x.toLowerCase() == language.toLowerCase());
        if (exactMatch) {
            return exactMatch;
        }

        const splitterIndex = language.indexOf('-');
        if (splitterIndex > -1) {
            const partialMatch = available
                .find(x => x.toLowerCase() == language.substr(0, splitterIndex).toLowerCase());
            if (partialMatch) {
                return partialMatch;
            }
        }

        return undefined;
    }

    // async addJson(filename: string): Promise<Locale> {

    //     if (!filename) {
    //         return undefined;
    //     }

    //     if (path.extname(filename) != 'json') {
    //         filename = filename + '.json';
    //     }
    //     filename = path.join(this.basePath, filename);

    //     const locale = await this.load(filename);

    //     if (this.has(locale.id)) {
    //         console.error(`Locale ${locale.id} already exists.`);
    //     } else {
    //         this.locales[locale.id] = locale;
    //         return locale;
    //     }
    // }

    load(filename: string): Promise<any> {

        return new Promise((resolve, reject): void => {
            fetch(filename)
                .then((result) => {
                    if (result.ok) {
                        resolve(result.json());
                    }
                    else {
                        reject();
                    }
                }, () => reject());
        });
    }

    // change(id: string) {
    //     if (!id) {
    //         return undefined;
    //     }
    //     const locale = this.get(id);
    //     if (locale) {
    //         this.selected = locale.id;
    //         this.languageChanged.emit('languageChanged');
    //     }
    // }

    // has(id: string): boolean {
    //     if (!id) {
    //         return undefined;
    //     }
    //     return (id in this.locales);
    // }

    // get(id: string): Locale {
    //     if (!id) {
    //         return undefined;
    //     }
    //     if (id in this.locales) {
    //         return this.locales[id];
    //     }
    //     else {
    //         console.error(`Locale "${id}" not found.`);
    //         return undefined;
    //     }
    // }

    label(key: string, locale?: string): string {
        if (!key) {
            return undefined;
        }
        if (locale) {
            return i18next.getFixedT(locale)(key);
        }
        else {
            return i18n.t(key);
        }
    }
}

export interface Locale {
    id: string;
    displayName: string;
    labels: string[];
}