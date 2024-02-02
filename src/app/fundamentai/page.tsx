import ProductCard from '@/components/ProductCard'
import React from 'react'

export default function page() {
    return (
        <div className="w-full  flex flex-col items-center justify-start">
            <div className="grid grid-cols-3 gap-10 my-8">
                {PRODUCTS.map((prod: any) => {
                    return <ProductCard className="border-2 border-solid border-black/10 rounded-xl max-w-[250px]  " data={prod} />
                })}
            </div>
        </div>
    )
}

export const PRODUCTS: any[] = [
    {
        id: 1,
        name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        price: 74,
        category: 'Category 1',
        tags: ['tag1', 'tag2'],
        link: '/product-detail/',
        variantType: 'image',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        allOfSizes: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'],
        status: 'New in',
        rating: '4.4',
        numberOfReviews: 98
    },
    {
        id: 2,
        name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        price: 68,
        category: 'Category 1',
        tags: ['tag1', 'tag2'],
        link: '/product-detail/',
        variantType: 'color',
        status: '50% Discount',
        rating: '4.9',
        numberOfReviews: 98
    },
    {
        id: 3,
        name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        price: 132,
        category: 'Category 1',
        tags: ['tag1', 'tag2'],
        link: '/product-detail/',
        variantType: 'image',
        sizes: ['S', 'M', 'L', 'XL'],
        allOfSizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
        rating: '4.9',
        numberOfReviews: 98
    },
    {
        id: 4,
        name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        price: 28,
        category: 'Category 1',
        tags: ['tag1', 'tag2'],
        variantType: 'color',
        link: '/product-detail/',
        status: 'Sold Out',
        rating: '4.9',
        numberOfReviews: 98
    },
    {
        id: 5,
        name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        price: 42,
        category: 'Category 1',
        tags: ['tag1', 'tag2'],
        variantType: 'image',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        allOfSizes: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'],
        link: '/product-detail/',
        rating: '4.9',
        numberOfReviews: 98
    },
    {
        id: 6,
        name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        price: 30,
        category: 'Category 1',
        tags: ['tag1', 'tag2'],
        variantType: 'color',
        link: '/product-detail/',
        rating: '4.9',
        numberOfReviews: 98
    },
    {
        id: 7,
        name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        price: 12,
        category: 'Category 1',
        tags: ['tag1', 'tag2'],
        variantType: 'image',
        link: '/product-detail/',
        status: 'New in',
        rating: '4.9',
        numberOfReviews: 98
    },
    {
        id: 8,
        name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        price: 145,
        category: 'Category 1',
        tags: ['tag1', 'tag2'],
        variantType: 'image',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        allOfSizes: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'],
        link: '/product-detail/',
        status: 'limited edition',
        rating: '4.9',
        numberOfReviews: 98
    }
]
