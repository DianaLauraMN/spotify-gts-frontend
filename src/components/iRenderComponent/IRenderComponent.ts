export interface IRenderComponent {
    cssClassName: string;
    title: string;
    render(): JSX.Element;
}