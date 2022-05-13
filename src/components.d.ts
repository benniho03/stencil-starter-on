/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ExampleComponent {
        "exampleProp": string;
        "exampleToUpperCase": () => Promise<void>;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface PopAnimatedCard {
        "step": number;
    }
    interface PopBackground {
        "color": string;
        "variation": string;
    }
    interface PopButton {
        "color"?: string;
        "link"?: string;
        "size": string;
        "text": string;
    }
    interface PopCard {
        "popyName": string;
        "properties": Array<{property: string, property2? :string, property3? :string}>;
    }
    interface PopContactform {
    }
    interface PopDeveloper {
        "namesJson": string;
    }
    interface PopDevlog {
        "form"?: string;
        "rlsdate": string;
        "updatetitle": string;
        "version": string;
    }
    interface PopDownload {
    }
    interface PopFooter {
        "footerlinks": Array <{name: string, href: string}>;
    }
    interface PopHeader {
        "navlinks": Array <{name: string, href: string}>;
    }
    interface PopHeading {
        "heading": string;
    }
    interface PopIntroduction {
        "introduction": any;
    }
    interface PopRotation {
    }
    interface PopShop {
    }
    interface PopSupporter {
        "supporter": string;
    }
}
declare global {
    interface HTMLExampleComponentElement extends Components.ExampleComponent, HTMLStencilElement {
    }
    var HTMLExampleComponentElement: {
        prototype: HTMLExampleComponentElement;
        new (): HTMLExampleComponentElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLPopAnimatedCardElement extends Components.PopAnimatedCard, HTMLStencilElement {
    }
    var HTMLPopAnimatedCardElement: {
        prototype: HTMLPopAnimatedCardElement;
        new (): HTMLPopAnimatedCardElement;
    };
    interface HTMLPopBackgroundElement extends Components.PopBackground, HTMLStencilElement {
    }
    var HTMLPopBackgroundElement: {
        prototype: HTMLPopBackgroundElement;
        new (): HTMLPopBackgroundElement;
    };
    interface HTMLPopButtonElement extends Components.PopButton, HTMLStencilElement {
    }
    var HTMLPopButtonElement: {
        prototype: HTMLPopButtonElement;
        new (): HTMLPopButtonElement;
    };
    interface HTMLPopCardElement extends Components.PopCard, HTMLStencilElement {
    }
    var HTMLPopCardElement: {
        prototype: HTMLPopCardElement;
        new (): HTMLPopCardElement;
    };
    interface HTMLPopContactformElement extends Components.PopContactform, HTMLStencilElement {
    }
    var HTMLPopContactformElement: {
        prototype: HTMLPopContactformElement;
        new (): HTMLPopContactformElement;
    };
    interface HTMLPopDeveloperElement extends Components.PopDeveloper, HTMLStencilElement {
    }
    var HTMLPopDeveloperElement: {
        prototype: HTMLPopDeveloperElement;
        new (): HTMLPopDeveloperElement;
    };
    interface HTMLPopDevlogElement extends Components.PopDevlog, HTMLStencilElement {
    }
    var HTMLPopDevlogElement: {
        prototype: HTMLPopDevlogElement;
        new (): HTMLPopDevlogElement;
    };
    interface HTMLPopDownloadElement extends Components.PopDownload, HTMLStencilElement {
    }
    var HTMLPopDownloadElement: {
        prototype: HTMLPopDownloadElement;
        new (): HTMLPopDownloadElement;
    };
    interface HTMLPopFooterElement extends Components.PopFooter, HTMLStencilElement {
    }
    var HTMLPopFooterElement: {
        prototype: HTMLPopFooterElement;
        new (): HTMLPopFooterElement;
    };
    interface HTMLPopHeaderElement extends Components.PopHeader, HTMLStencilElement {
    }
    var HTMLPopHeaderElement: {
        prototype: HTMLPopHeaderElement;
        new (): HTMLPopHeaderElement;
    };
    interface HTMLPopHeadingElement extends Components.PopHeading, HTMLStencilElement {
    }
    var HTMLPopHeadingElement: {
        prototype: HTMLPopHeadingElement;
        new (): HTMLPopHeadingElement;
    };
    interface HTMLPopIntroductionElement extends Components.PopIntroduction, HTMLStencilElement {
    }
    var HTMLPopIntroductionElement: {
        prototype: HTMLPopIntroductionElement;
        new (): HTMLPopIntroductionElement;
    };
    interface HTMLPopRotationElement extends Components.PopRotation, HTMLStencilElement {
    }
    var HTMLPopRotationElement: {
        prototype: HTMLPopRotationElement;
        new (): HTMLPopRotationElement;
    };
    interface HTMLPopShopElement extends Components.PopShop, HTMLStencilElement {
    }
    var HTMLPopShopElement: {
        prototype: HTMLPopShopElement;
        new (): HTMLPopShopElement;
    };
    interface HTMLPopSupporterElement extends Components.PopSupporter, HTMLStencilElement {
    }
    var HTMLPopSupporterElement: {
        prototype: HTMLPopSupporterElement;
        new (): HTMLPopSupporterElement;
    };
    interface HTMLElementTagNameMap {
        "example-component": HTMLExampleComponentElement;
        "my-component": HTMLMyComponentElement;
        "pop-animated-card": HTMLPopAnimatedCardElement;
        "pop-background": HTMLPopBackgroundElement;
        "pop-button": HTMLPopButtonElement;
        "pop-card": HTMLPopCardElement;
        "pop-contactform": HTMLPopContactformElement;
        "pop-developer": HTMLPopDeveloperElement;
        "pop-devlog": HTMLPopDevlogElement;
        "pop-download": HTMLPopDownloadElement;
        "pop-footer": HTMLPopFooterElement;
        "pop-header": HTMLPopHeaderElement;
        "pop-heading": HTMLPopHeadingElement;
        "pop-introduction": HTMLPopIntroductionElement;
        "pop-rotation": HTMLPopRotationElement;
        "pop-shop": HTMLPopShopElement;
        "pop-supporter": HTMLPopSupporterElement;
    }
}
declare namespace LocalJSX {
    interface ExampleComponent {
        "exampleProp"?: string;
        "onExampleEvent"?: (event: CustomEvent<string>) => void;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface PopAnimatedCard {
        "step"?: number;
    }
    interface PopBackground {
        "color"?: string;
        "variation"?: string;
    }
    interface PopButton {
        "color"?: string;
        "link"?: string;
        "size"?: string;
        "text"?: string;
    }
    interface PopCard {
        "popyName"?: string;
        "properties"?: Array<{property: string, property2? :string, property3? :string}>;
    }
    interface PopContactform {
    }
    interface PopDeveloper {
        "namesJson"?: string;
    }
    interface PopDevlog {
        "form"?: string;
        "rlsdate"?: string;
        "updatetitle"?: string;
        "version"?: string;
    }
    interface PopDownload {
    }
    interface PopFooter {
        "footerlinks"?: Array <{name: string, href: string}>;
    }
    interface PopHeader {
        "navlinks"?: Array <{name: string, href: string}>;
    }
    interface PopHeading {
        "heading"?: string;
    }
    interface PopIntroduction {
        "introduction"?: any;
    }
    interface PopRotation {
    }
    interface PopShop {
    }
    interface PopSupporter {
        "supporter"?: string;
    }
    interface IntrinsicElements {
        "example-component": ExampleComponent;
        "my-component": MyComponent;
        "pop-animated-card": PopAnimatedCard;
        "pop-background": PopBackground;
        "pop-button": PopButton;
        "pop-card": PopCard;
        "pop-contactform": PopContactform;
        "pop-developer": PopDeveloper;
        "pop-devlog": PopDevlog;
        "pop-download": PopDownload;
        "pop-footer": PopFooter;
        "pop-header": PopHeader;
        "pop-heading": PopHeading;
        "pop-introduction": PopIntroduction;
        "pop-rotation": PopRotation;
        "pop-shop": PopShop;
        "pop-supporter": PopSupporter;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "example-component": LocalJSX.ExampleComponent & JSXBase.HTMLAttributes<HTMLExampleComponentElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "pop-animated-card": LocalJSX.PopAnimatedCard & JSXBase.HTMLAttributes<HTMLPopAnimatedCardElement>;
            "pop-background": LocalJSX.PopBackground & JSXBase.HTMLAttributes<HTMLPopBackgroundElement>;
            "pop-button": LocalJSX.PopButton & JSXBase.HTMLAttributes<HTMLPopButtonElement>;
            "pop-card": LocalJSX.PopCard & JSXBase.HTMLAttributes<HTMLPopCardElement>;
            "pop-contactform": LocalJSX.PopContactform & JSXBase.HTMLAttributes<HTMLPopContactformElement>;
            "pop-developer": LocalJSX.PopDeveloper & JSXBase.HTMLAttributes<HTMLPopDeveloperElement>;
            "pop-devlog": LocalJSX.PopDevlog & JSXBase.HTMLAttributes<HTMLPopDevlogElement>;
            "pop-download": LocalJSX.PopDownload & JSXBase.HTMLAttributes<HTMLPopDownloadElement>;
            "pop-footer": LocalJSX.PopFooter & JSXBase.HTMLAttributes<HTMLPopFooterElement>;
            "pop-header": LocalJSX.PopHeader & JSXBase.HTMLAttributes<HTMLPopHeaderElement>;
            "pop-heading": LocalJSX.PopHeading & JSXBase.HTMLAttributes<HTMLPopHeadingElement>;
            "pop-introduction": LocalJSX.PopIntroduction & JSXBase.HTMLAttributes<HTMLPopIntroductionElement>;
            "pop-rotation": LocalJSX.PopRotation & JSXBase.HTMLAttributes<HTMLPopRotationElement>;
            "pop-shop": LocalJSX.PopShop & JSXBase.HTMLAttributes<HTMLPopShopElement>;
            "pop-supporter": LocalJSX.PopSupporter & JSXBase.HTMLAttributes<HTMLPopSupporterElement>;
        }
    }
}
