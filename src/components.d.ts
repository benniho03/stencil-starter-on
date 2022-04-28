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
    interface PopButton {
        "link"?: string;
        "size": string;
        "text": string;
    }
    interface PopCard {
        "popyName": string;
        "properties": Array<{property: string, property2? :string, property3? :string}>;
    }
    interface PopHeader {
        "navlinks": Array <{name: string, href: string}>;
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
    interface HTMLPopHeaderElement extends Components.PopHeader, HTMLStencilElement {
    }
    var HTMLPopHeaderElement: {
        prototype: HTMLPopHeaderElement;
        new (): HTMLPopHeaderElement;
    };
    interface HTMLElementTagNameMap {
        "example-component": HTMLExampleComponentElement;
        "my-component": HTMLMyComponentElement;
        "pop-button": HTMLPopButtonElement;
        "pop-card": HTMLPopCardElement;
        "pop-header": HTMLPopHeaderElement;
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
    interface PopButton {
        "link"?: string;
        "size"?: string;
        "text"?: string;
    }
    interface PopCard {
        "popyName"?: string;
        "properties"?: Array<{property: string, property2? :string, property3? :string}>;
    }
    interface PopHeader {
        "navlinks"?: Array <{name: string, href: string}>;
    }
    interface IntrinsicElements {
        "example-component": ExampleComponent;
        "my-component": MyComponent;
        "pop-button": PopButton;
        "pop-card": PopCard;
        "pop-header": PopHeader;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "example-component": LocalJSX.ExampleComponent & JSXBase.HTMLAttributes<HTMLExampleComponentElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "pop-button": LocalJSX.PopButton & JSXBase.HTMLAttributes<HTMLPopButtonElement>;
            "pop-card": LocalJSX.PopCard & JSXBase.HTMLAttributes<HTMLPopCardElement>;
            "pop-header": LocalJSX.PopHeader & JSXBase.HTMLAttributes<HTMLPopHeaderElement>;
        }
    }
}
