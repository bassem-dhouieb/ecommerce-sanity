export default {
    name : 'product',
    title : 'Product',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{type: 'image'}],
            options: {
                hotspot:true,
            }
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',

        },
        {
            name:'slug',
            title: 'Slug',
            type: 'slug',
            options:{
                source: 'name',
                maxLength: 90,
            }
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
        },
        {
            name: 'details',
            title: 'Details',
            type: 'string',

        },
        {
            name: 'categories',
            title: 'Categories',
            type: 'string',
            options: {
                list: [
                  { title: 'Art', value: 'art' },
                  { title: 'Fashion', value: 'fashion' },
                  { title: 'Gadgets', value: 'gadgets' },
                  { title: 'Household', value: 'household' },
                  { title: 'Models', value: 'models' },
                  { title: 'Household', value: 'household' },
                  { title: 'Tools', value: 'tools' },
                  { title: 'Toys', value: 'toys' },
                ],
              },
        },
        {
            name: 'weight',
            title: 'Weight',
            type: 'number',
        },

    ]
}