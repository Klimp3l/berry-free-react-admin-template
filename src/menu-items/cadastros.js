// assets
import { IconUserPlus, IconBasket, IconReportMoney, IconPackage, IconBuildingStore, IconTruck, IconUsers } from '@tabler/icons';

// constant
const icons = {
    IconUserPlus,
    IconBasket,
    IconReportMoney,
    IconPackage,
    IconBuildingStore,
    IconTruck,
    IconUsers
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const cadastros = {
    id: 'cadastros',
    title: 'Cadastros',
    type: 'group',
    children: [
        {
            id: 'pessoa',
            title: 'Pessoa',
            type: 'collapse',
            icon: icons.IconUserPlus,
            children: [
                {
                    id: 'fornecedor',
                    title: 'Fornecedor',
                    type: 'item',
                    url: '/cadastros/pessoa/fornecedor',
                    icon: icons.IconTruck
                },
                {
                    id: 'cliente',
                    title: 'Cliente',
                    type: 'item',
                    url: '/cadastros/pessoa/cliente',
                    icon: icons.IconUsers
                }
            ]
        },
        {
            id: 'produto',
            title: 'Produto',
            type: 'item',
            url: '/cadastros/produto',
            icon: icons.IconBasket
        },
        {
            id: 'financeiro',
            title: 'Financeiro',
            type: 'collapse',
            icon: icons.IconReportMoney,
            children: [
                {
                    id: 'entrada',
                    title: 'Entrada (Compra)',
                    type: 'item',
                    url: '/cadastros/pessoa/fornecedor',
                    icon: icons.IconPackage
                },
                {
                    id: 'saida',
                    title: 'Saída (Venda)',
                    type: 'item',
                    url: '/cadastros/pessoa/cliente',
                    icon: icons.IconBuildingStore
                }
            ]
        }
    ]
};

export default cadastros;
