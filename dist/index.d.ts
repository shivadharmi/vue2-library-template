import type { ComponentOptionsMixin } from 'vue/types/v3-component-options';
import type { DefineComponent } from 'vue';
import type { ExtractPropTypes } from 'vue';

declare const Image_2: DefineComponent<{
    msg: {
        type: StringConstructor;
        default: string;
    };
}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, Readonly<ExtractPropTypes<{
    msg: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    msg: string;
}>;
export { Image_2 as Image }

export declare interface User {
    id: string;
    name: string;
}

export { }
