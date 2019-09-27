/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface HarmonizedViewer {
    'topbar': HTMLHvTopbarElement;
  }
  interface HvContent {
    'navigation': HTMLHvNavigationElement;
  }
  interface HvNavigation {
    'open': boolean;
  }
  interface HvToolbar {}
  interface HvTopbar {
    'publisher': string;
    'thumbnail': string;
    'title': string;
  }
  interface HvViewport {
    'manifest': string;
    'openseadragon': any;
  }
}

declare global {


  interface HTMLHarmonizedViewerElement extends Components.HarmonizedViewer, HTMLStencilElement {}
  var HTMLHarmonizedViewerElement: {
    prototype: HTMLHarmonizedViewerElement;
    new (): HTMLHarmonizedViewerElement;
  };

  interface HTMLHvContentElement extends Components.HvContent, HTMLStencilElement {}
  var HTMLHvContentElement: {
    prototype: HTMLHvContentElement;
    new (): HTMLHvContentElement;
  };

  interface HTMLHvNavigationElement extends Components.HvNavigation, HTMLStencilElement {}
  var HTMLHvNavigationElement: {
    prototype: HTMLHvNavigationElement;
    new (): HTMLHvNavigationElement;
  };

  interface HTMLHvToolbarElement extends Components.HvToolbar, HTMLStencilElement {}
  var HTMLHvToolbarElement: {
    prototype: HTMLHvToolbarElement;
    new (): HTMLHvToolbarElement;
  };

  interface HTMLHvTopbarElement extends Components.HvTopbar, HTMLStencilElement {}
  var HTMLHvTopbarElement: {
    prototype: HTMLHvTopbarElement;
    new (): HTMLHvTopbarElement;
  };

  interface HTMLHvViewportElement extends Components.HvViewport, HTMLStencilElement {}
  var HTMLHvViewportElement: {
    prototype: HTMLHvViewportElement;
    new (): HTMLHvViewportElement;
  };
  interface HTMLElementTagNameMap {
    'harmonized-viewer': HTMLHarmonizedViewerElement;
    'hv-content': HTMLHvContentElement;
    'hv-navigation': HTMLHvNavigationElement;
    'hv-toolbar': HTMLHvToolbarElement;
    'hv-topbar': HTMLHvTopbarElement;
    'hv-viewport': HTMLHvViewportElement;
  }
}

declare namespace LocalJSX {
  interface HarmonizedViewer {
    'topbar'?: HTMLHvTopbarElement;
  }
  interface HvContent {
    'navigation'?: HTMLHvNavigationElement;
  }
  interface HvNavigation {
    'open'?: boolean;
  }
  interface HvToolbar {}
  interface HvTopbar {
    'onNavigationToggled'?: (event: CustomEvent<any>) => void;
    'publisher'?: string;
    'thumbnail'?: string;
    'title'?: string;
  }
  interface HvViewport {
    'manifest'?: string;
    'openseadragon'?: any;
  }

  interface IntrinsicElements {
    'harmonized-viewer': HarmonizedViewer;
    'hv-content': HvContent;
    'hv-navigation': HvNavigation;
    'hv-toolbar': HvToolbar;
    'hv-topbar': HvTopbar;
    'hv-viewport': HvViewport;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'harmonized-viewer': LocalJSX.HarmonizedViewer & JSXBase.HTMLAttributes<HTMLHarmonizedViewerElement>;
      'hv-content': LocalJSX.HvContent & JSXBase.HTMLAttributes<HTMLHvContentElement>;
      'hv-navigation': LocalJSX.HvNavigation & JSXBase.HTMLAttributes<HTMLHvNavigationElement>;
      'hv-toolbar': LocalJSX.HvToolbar & JSXBase.HTMLAttributes<HTMLHvToolbarElement>;
      'hv-topbar': LocalJSX.HvTopbar & JSXBase.HTMLAttributes<HTMLHvTopbarElement>;
      'hv-viewport': LocalJSX.HvViewport & JSXBase.HTMLAttributes<HTMLHvViewportElement>;
    }
  }
}


