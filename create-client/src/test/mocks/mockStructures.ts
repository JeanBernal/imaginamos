export const MocketResponse = {
    BUILD_CATALOGS: [{
        id: 1,
        name: 'prueba mock',
        services: [],
        allServices: true
    }],
    FAILED_BUILD_CATALOGS: [{
        id: undefined,
        name: undefined,
        services: [],
        allServices: undefined
    }],
    BUILD_CONFIGS: [{
        'id': '1',
        'name': 'prueba mock',
        'catalogs': [],
        'allCatalogs': true,
        'payGateways': []
    
    }],
    FAILED_BUILD_CONFIGS: [{
        'id': undefined,
        'name': undefined,
        'catalogs': [],
        'allCatalogs': true,
        'payGateways': []
    
    }],
    BUILD_SERVICES: [{
        'id': '1',
        'name': 'mock prueba',
        'products': [],
        'allProducts': true
    }],
    FAILED_BUILD_SERVICES: [{
        'id': undefined,
        'name': undefined,
        'products': [],
        'allProducts': undefined
    }],
    RESELLERS: [
        {
            "id": 1,
            "name": 'prueba',
            "img_url": "fsdfsdf"
        }
    ],
    RESELLER_CATALOGS: [
        {
            "id": 1,
            "name": 'prueba',
            "re_seller_id": "1",
            "catalog_id": "1",
            "all_services": true
        }
    ],
    RESELLER_SERVICES: [
        {
            "id": 1,
            "name": 'prueba',
            "re_seller_id": "1",
            "catalog_id": "1",
            "service_id": "1",
            "all_products": true
        }
    ],
    RESELLER_PRODUCTS: [
        {
            "id": 1,
            "re_seller_id": "1",
            "re_seller_name": "prueba",
            "catalog_id": "1",
            "catalog_name": "catalog prueba",
            "service_id": "1",
            "service_name": "service prueba",
            "product_id": "1",
            "product_name": "product prueba"
        }
    ],
    RESELLER_PAY_GATEWAY: [
        {
            "id": "1",
            "name": "prueba",
            "re_seller_id": "1",
            "img_url": "www"
            
        }
    ],
    LIST_RESELLER: {
        "config": [
            {
                "id": "123",
                "name": "daviplata",
                "catalogs": [
                    {
                        "id": 1,
                        "name": "DoctorAki",
                        "services": [
                            {
                                "id": 1,
                                "name": "DoctorAki",
                                "products": [
                                    {
                                        "id": 1,
                                        "product_name": "aseo en casa 4 horas"
                                    }
                                ],
                                "allProducts": true
                            }
                        ],
                        "allServices": true
                    }
                ],
                "allCatalogs": true,
                "payGateways": [
                    {
                        "id": 1,
                        "name": "ePayco",
                        "url": "https://commons.segurosbolivar.com/epay"
                    }
                ]
            },
            {
                "id": "124",
                "name": "nequi",
                "catalogs": []
            }
        ]
    }
}