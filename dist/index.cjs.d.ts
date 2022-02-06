export var __esModule: boolean;
declare function Icon$4(props: any): any;
export function Alert(_a: any): any;
declare function Icon$5(props: any): any;
declare function Icon$6(props: any): any;
declare function Icon$7(props: any): any;
declare function Icon$8(props: any): any;
declare function Icon$9(props: any): any;
declare function Icon$a(props: any): any;
export function BackgroundImage(_a: any): any;
declare var GridLayout: any;
declare function Icon$b(props: any): any;
declare function Icon$2(props: any): any;
export function Breadcrumbs(_a: any): any;
declare function Icon$c(props: any): any;
export function Button(_a: any): any;
export namespace Button {
    namespace defaultProps {
        import variant = variants.PRIMARY;
        export { variant };
        import size = sizes.MD;
        export { size };
        export const external: boolean;
        export const isLoading: boolean;
        export const disabled: boolean;
    }
}
export function ButtonMenu(_a: any): any;
export function ButtonMenuItem(_a: any): any;
declare function Icon$e(props: any): any;
export function Card(_a: any): any;
export var CardBody: any;
export var CardFooter: any;
export var CardHeader: any;
export function CardRibbon(_a: any): any;
declare function Icon$d(props: any): any;
declare var GridLayout$1: any;
export var Checkbox: any;
declare function Icon(props: any): any;
declare function Icon$f(props: any): any;
declare function Icon$g(props: any): any;
declare function Icon$h(props: any): any;
declare function Icon$i(props: any): any;
declare function Icon$j(props: any): any;
declare function Icon$k(props: any): any;
declare function Icon$l(props: any): any;
declare function Icon$m(props: any): any;
declare function Icon$n(props: any): any;
export function Dropdown(_a: any): any;
export namespace Dropdown {
    export namespace defaultProps_1 {
        const position: string;
    }
    export { defaultProps_1 as defaultProps };
}
declare function Icon$1(props: any): any;
export var Flex: any;
export var Heading: any;
declare function Icon$o(props: any): any;
export var IconButton: any;
export function Image(_a: any): any;
declare function Icon$3(props: any): any;
export var Input: any;
export function Link(_a: any): any;
export namespace Link {
    export namespace defaultProps_2 {
        const color: string;
    }
    export { defaultProps_2 as defaultProps };
}
export function LinkExternal(_a: any): any;
declare function Icon$p(props: any): any;
declare function Icon$q(props: any): any;
declare function Icon$r(props: any): any;
export function Menu(_a: any): any;
declare function Icon$s(props: any): any;
export function Modal(_a: any): any;
export function ModalProvider(_a: any): any;
declare function Icon$t(props: any): any;
declare function Icon$v(props: any): any;
declare function Icon$u(props: any): any;
declare function Icon$w(props: any): any;
export function Progress(_a: any): any;
declare function Icon$z(props: any): any;
export var Radio: any;
declare function Icon$x(props: any): any;
export var ResetCSS: styled.GlobalStyleComponent<{}, styled.DefaultTheme>;
declare function Icon$D(props: any): any;
export function Skeleton(_a: any): any;
export function Spinner(_a: any): any;
export var Svg: any;
declare function Icon$E(props: any): any;
declare function Icon$F(props: any): any;
export function Tag(_a: any): any;
export namespace Tag {
    export namespace defaultProps_3 {
        const variant_1: string;
        export { variant_1 as variant };
        export const outline: boolean;
    }
    export { defaultProps_3 as defaultProps };
}
export var Text: any;
declare function Icon$B(props: any): any;
declare function Icon$C(props: any): any;
export function ToastContainer(_a: any): any;
export function Toggle(_a: any): any;
declare function Icon$y(props: any): any;
declare function Icon$G(props: any): any;
declare function Icon$A(props: any): any;
declare namespace variants$1 {
    const INFO: string;
    const DANGER: string;
    const SUCCESS: string;
    const WARNING: string;
}
export function byTextAscending(getTextProperty: any): (objectA: any, objectB: any) => 0 | 1 | -1;
export function byTextDescending(getTextProperty: any): (objectA: any, objectB: any) => 0 | 1 | -1;
declare var darkTheme: any;
export var darkColors: any;
declare var lightTheme: any;
export var lightColors: any;
export function makeRender(value: any, render: any, row: any): () => any;
declare var links: ({
    label: string;
    icon: string;
    href: string;
    items?: undefined;
    calloutClass?: undefined;
} | {
    label: string;
    icon: string;
    items: {
        label: string;
        href: string;
    }[];
    href?: undefined;
    calloutClass?: undefined;
} | {
    label: string;
    icon: string;
    items: {
        label: string;
        href: string;
    }[];
    calloutClass: string;
    href?: undefined;
} | {
    label: string;
    icon: string;
    href?: undefined;
    items?: undefined;
    calloutClass?: undefined;
})[];
declare namespace types {
    const SUCCESS_1: string;
    export { SUCCESS_1 as SUCCESS };
    const DANGER_1: string;
    export { DANGER_1 as DANGER };
    const WARNING_1: string;
    export { WARNING_1 as WARNING };
    const INFO_1: string;
    export { INFO_1 as INFO };
}
export function useMatchBreakpoints(): {};
export function useModal(modal: any, closeOnOverlayClick: any): (() => void)[];
/**
 * @see https://css-tricks.com/playing-with-particles-using-the-web-animations-api/
 */
export function useParticleBurst(options: any): {
    initialize: () => void;
    teardown: () => void;
};
export function useTable(columns: any, data: any, options: any): {
    headers: any[];
    rows: any;
    originalRows: any;
    selectedRows: any;
    dispatch: React.DispatchWithoutAction;
    selectRow: (rowId: any) => void;
    toggleAll: () => void;
    toggleSort: (columnName: any, isAscOverride: any) => void;
    setSearchString: (searchString: any) => void;
    pagination: any;
    toggleAllState: any;
};
export function useWalletModal(login: any, logout: any, account: any): {
    onPresentConnectModal: () => void;
    onPresentAccountModal: () => void;
};
declare namespace variants {
    export const PRIMARY: string;
    export const SECONDARY: string;
    export const TERTIARY: string;
    export const TEXT: string;
    const DANGER_2: string;
    export { DANGER_2 as DANGER };
    export const SUBTLE: string;
    const SUCCESS_2: string;
    export { SUCCESS_2 as SUCCESS };
}
declare namespace sizes {
    const SM: string;
    const MD: string;
}
import styled = require("styled-components");
import React = require("react");
export { Icon$4 as AddIcon, Icon$5 as ArrowBackIcon, Icon$6 as ArrowDownIcon, Icon$7 as ArrowDropDownIcon, Icon$8 as ArrowDropUpIcon, Icon$9 as ArrowForwardIcon, Icon$a as AutoRenewIcon, GridLayout as BaseLayout, Icon$b as BinanceIcon, Icon$2 as BlockIcon, Icon$c as BunnyPlaceholderIcon, Icon$e as CalculateIcon, Icon$d as CardViewIcon, GridLayout$1 as CardsLayout, Icon as CheckmarkCircleIcon, Icon$f as CheckmarkIcon, Icon$g as ChevronDownIcon, Icon$h as ChevronLeftIcon, Icon$i as ChevronRightIcon, Icon$j as ChevronUpIcon, Icon$k as CloseIcon, Icon$l as CogIcon, Icon$m as CommunityIcon, Icon$n as CopyIcon, Icon$1 as ErrorIcon, Icon$o as HelpIcon, Icon$3 as InfoIcon, Icon$p as ListViewIcon, Icon$q as LogoIcon, Icon$r as LogoRoundIcon, Icon$s as MinusIcon, Icon$t as OpenNewIcon, Icon$v as PancakeRoundIcon, Icon$u as PancakesIcon, Icon$w as PrizeIcon, Icon$z as ProgressBunny, Icon$x as RemoveIcon, Icon$D as SearchIcon, Icon$E as SwapVertIcon, Icon$F as SyncAltIcon, Icon$B as Ticket, Icon$C as TicketRound, Icon$y as VerifiedIcon, Icon$G as WarningIcon, Icon$A as Won, variants$1 as alertVariants, darkTheme as dark, lightTheme as light, links as menuConfig, types as toastTypes };
