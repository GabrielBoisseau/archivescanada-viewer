import { Component, h } from '@stencil/core';

@Component({
    tag: 'hv-statusbar',
    styleUrl: 'statusbar-component.scss'
})
export class HvStatusbar {

    render() {
        return <div>
            <div class="bx--pagination" data-pagination>
                <div class="bx--pagination__left">
                    <div data-content-switcher class="bx--content-switcher" role="tablist" aria-label="Demo switch content">
                        <button class="bx--content-switcher-btn bx--content-switcher--selected" data-target=".demo--panel--opt-1" role="tab" aria-selected="true" >
                            <span class="bx--content-switcher__label">JPG</span>
                        </button>
                        <button class="bx--content-switcher-btn" data-target=".demo--panel--opt-2" role="tab" >
                            <span class="bx--content-switcher__label">PDF</span>
                        </button>
                    </div>
                </div>
                <div class="bx--pagination__left">
                    <label id="select-id-pagination-count-label" class="bx--pagination__text">
                        Items per page:
    </label>
                    <div class="bx--select bx--select--inline bx--select__item-count">
                        <select class="bx--select-input" id="select-id-pagination-count" aria-label="Items per page" tabindex="0" data-items-per-page>
                            <option class="bx--select-option" value="10">
                                10
        </option>
                            <option class="bx--select-option" value="20">
                                20
        </option>
                            <option class="bx--select-option" value="30">
                                30
        </option>
                            <option class="bx--select-option" value="40">
                                40
        </option>
                            <option class="bx--select-option" value="50">
                                50
        </option>
                        </select>
                        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" class="bx--select__arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11L3 6l.7-.7L8 9.6l4.3-4.3.7.7z"></path></svg>
                    </div>
                    <span class="bx--pagination__text">
                        <span data-displayed-item-range>1 – 10</span> of
      <span data-total-items>
                            40
      </span> items
    </span>
                </div>
                <div class="bx--pagination__right">
                    <div class="bx--select bx--select--inline bx--select__page-number">
                        <select class="bx--select-input" id="select-id-pagination-page" aria-label="page number, of 5 pages" tabindex="0" data-page-number-input>
                            <option class="bx--select-option" value="1">
                                1
        </option>
                            <option class="bx--select-option" value="2">
                                2
        </option>
                            <option class="bx--select-option" value="3">
                                3
        </option>
                            <option class="bx--select-option" value="4">
                                4
        </option>
                            <option class="bx--select-option" value="5">
                                5
        </option>
                        </select>
                        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" class="bx--select__arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11L3 6l.7-.7L8 9.6l4.3-4.3.7.7z"></path></svg>
                    </div>
                    <label id="select-id-pagination-page-label" class="bx--pagination__text">
                        of 5 pages
    </label>
                    <button class="bx--pagination__button bx--pagination__button--backward " tabindex="0" data-page-backward aria-label="previous page">
                        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" class="bx--pagination__nav-arrow" width="20" height="20" viewBox="0 0 32 32" aria-hidden="true"><path d="M19 23l-8-7 8-7v14z"></path></svg>
                    </button>
                    <button class="bx--pagination__button bx--pagination__button--forward " tabindex="0" data-page-forward aria-label="next page">
                        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" class="bx--pagination__nav-arrow" width="20" height="20" viewBox="0 0 32 32" aria-hidden="true"><path d="M13 9l8 7-8 7V9z"></path></svg>
                    </button>
                </div>
            </div>

        </div>;
    }
}
