/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  LocationOption,
} from './components/viewer-component/viewer-options';
import {
  Overlay,
} from './overlay';

export namespace Components {
  interface HarmonizedViewer {
    'annotations': HTMLHvAnnotationsElement;
    'annotationsShow': boolean;
    'currentPage': () => Promise<number>;
    'manifest': Manifesto.IManifest;
    'navigationElement': HTMLHvNavigationElement;
    'navigationHeight'?: number;
    'navigationLocation': LocationOption;
    'page': number;
    'toolbar': HTMLHvToolbarElement;
    'toolbarShow': boolean;
    'topbar': HTMLHvTopbarElement;
    'topbarShow': boolean;
    'totalPages': number;
    'url': string;
    'viewport': HTMLHvViewportElement;
  }
  interface HvAnnotations {
    'manifest': Manifesto.IManifest;
    'page': number;
  }
  interface HvNavigation {
    'manifest': Manifesto.IManifest;
    'page': number;
  }
  interface HvSettings {}
  interface HvStatusbar {}
  interface HvToolbar {
    'page': number;
    'totalPages': number;
  }
  interface HvTopbar {
    'manifest': Manifesto.IManifest;
  }
  interface HvViewport {
    'addOverlay': (x: number, y: number) => Promise<void>;
    'getOverlays': () => Promise<Overlay[]>;
    'openseadragon': any;
    'overlays': Overlay[];
    'page': number;
    'totalPages': number;
    'url': string;
  }
}

declare global {


  interface HTMLHarmonizedViewerElement extends Components.HarmonizedViewer, HTMLStencilElement {}
  const HTMLHarmonizedViewerElement: {
    prototype: HTMLHarmonizedViewerElement;
    new (): HTMLHarmonizedViewerElement;
  };

  interface HTMLHvAnnotationsElement extends Components.HvAnnotations, HTMLStencilElement {}
  const HTMLHvAnnotationsElement: {
    prototype: HTMLHvAnnotationsElement;
    new (): HTMLHvAnnotationsElement;
  };

  interface HTMLHvNavigationElement extends Components.HvNavigation, HTMLStencilElement {}
  const HTMLHvNavigationElement: {
    prototype: HTMLHvNavigationElement;
    new (): HTMLHvNavigationElement;
  };

  interface HTMLHvSettingsElement extends Components.HvSettings, HTMLStencilElement {}
  const HTMLHvSettingsElement: {
    prototype: HTMLHvSettingsElement;
    new (): HTMLHvSettingsElement;
  };

  interface HTMLHvStatusbarElement extends Components.HvStatusbar, HTMLStencilElement {}
  const HTMLHvStatusbarElement: {
    prototype: HTMLHvStatusbarElement;
    new (): HTMLHvStatusbarElement;
  };

  interface HTMLHvToolbarElement extends Components.HvToolbar, HTMLStencilElement {}
  const HTMLHvToolbarElement: {
    prototype: HTMLHvToolbarElement;
    new (): HTMLHvToolbarElement;
  };

  interface HTMLHvTopbarElement extends Components.HvTopbar, HTMLStencilElement {}
  const HTMLHvTopbarElement: {
    prototype: HTMLHvTopbarElement;
    new (): HTMLHvTopbarElement;
  };

  interface HTMLHvViewportElement extends Components.HvViewport, HTMLStencilElement {}
  const HTMLHvViewportElement: {
    prototype: HTMLHvViewportElement;
    new (): HTMLHvViewportElement;
  };
  interface HTMLElementTagNameMap {
    'harmonized-viewer': HTMLHarmonizedViewerElement;
    'hv-annotations': HTMLHvAnnotationsElement;
    'hv-navigation': HTMLHvNavigationElement;
    'hv-settings': HTMLHvSettingsElement;
    'hv-statusbar': HTMLHvStatusbarElement;
    'hv-toolbar': HTMLHvToolbarElement;
    'hv-topbar': HTMLHvTopbarElement;
    'hv-viewport': HTMLHvViewportElement;
  }
}

declare namespace LocalJSX {
  interface HarmonizedViewer {
    'annotations'?: HTMLHvAnnotationsElement;
    'annotationsShow'?: boolean;
    'manifest'?: Manifesto.IManifest;
    'navigationElement'?: HTMLHvNavigationElement;
    'navigationHeight'?: number;
    'navigationLocation'?: LocationOption;
    'onGoto'?: (event: CustomEvent<any>) => void;
    'onManifestLoaded'?: (event: CustomEvent<any>) => void;
    'page'?: number;
    'toolbar'?: HTMLHvToolbarElement;
    'toolbarShow'?: boolean;
    'topbar'?: HTMLHvTopbarElement;
    'topbarShow'?: boolean;
    'totalPages'?: number;
    'url'?: string;
    'viewport'?: HTMLHvViewportElement;
  }
  interface HvAnnotations {
    'manifest'?: Manifesto.IManifest;
    'page'?: number;
  }
  interface HvNavigation {
    'manifest'?: Manifesto.IManifest;
    'onGoto'?: (event: CustomEvent<any>) => void;
    'page'?: number;
  }
  interface HvSettings {}
  interface HvStatusbar {}
  interface HvToolbar {
    'onNext'?: (event: CustomEvent<any>) => void;
    'onPrevious'?: (event: CustomEvent<any>) => void;
    'page'?: number;
    'totalPages'?: number;
  }
  interface HvTopbar {
    'manifest'?: Manifesto.IManifest;
  }
  interface HvViewport {
    'onCanvasLoaded'?: (event: CustomEvent<any>) => void;
    'onManifestLoaded'?: (event: CustomEvent<any>) => void;
    'onOverlayClick'?: (event: CustomEvent<any>) => void;
    'onPageLoaded'?: (event: CustomEvent<any>) => void;
    'openseadragon'?: any;
    'overlays'?: Overlay[];
    'page'?: number;
    'totalPages'?: number;
    'url'?: string;
  }

  interface IntrinsicElements {
    'harmonized-viewer': HarmonizedViewer;
    'hv-annotations': HvAnnotations;
    'hv-navigation': HvNavigation;
    'hv-settings': HvSettings;
    'hv-statusbar': HvStatusbar;
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
      'hv-annotations': LocalJSX.HvAnnotations & JSXBase.HTMLAttributes<HTMLHvAnnotationsElement>;
      'hv-navigation': LocalJSX.HvNavigation & JSXBase.HTMLAttributes<HTMLHvNavigationElement>;
      'hv-settings': LocalJSX.HvSettings & JSXBase.HTMLAttributes<HTMLHvSettingsElement>;
      'hv-statusbar': LocalJSX.HvStatusbar & JSXBase.HTMLAttributes<HTMLHvStatusbarElement>;
      'hv-toolbar': LocalJSX.HvToolbar & JSXBase.HTMLAttributes<HTMLHvToolbarElement>;
      'hv-topbar': LocalJSX.HvTopbar & JSXBase.HTMLAttributes<HTMLHvTopbarElement>;
      'hv-viewport': LocalJSX.HvViewport & JSXBase.HTMLAttributes<HTMLHvViewportElement>;
    }
  }
}


