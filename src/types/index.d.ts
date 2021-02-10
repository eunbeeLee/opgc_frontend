interface IMenu {
    display: string
    name: string
    path: string
    visible: boolean
    component: React.FC<any>
}
