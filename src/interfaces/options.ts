export interface OpcionMenu {
    label: string;
    action?: () => Promise<void>;
}
