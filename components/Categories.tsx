import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { getCategories } from '../services'

export const Categories = ( { dummy }: { dummy: any} ) => {
    const [categories, setCategories] = useState<any[]>([]);

    useEffect(() => {
        getCategories()
            .then((newCategories) => setCategories(newCategories))
    }, []);

    return (
        <div className="bg-white shadow-lg rounded-lg p-8 mb-8 pb-12">
            <h3 className="text-xl mb-8 font-semibold border-b pb-4">
                カテゴリー
            </h3>
            {categories.map((category) => (
              <Link key={category.slug} href={`/category/${category.slug}`}>
                <span className="cursor-pointer block pb-3 mb-3 hover:text-orange-400">
                    {category.name}
                </span>
              </Link>  
            ))}
        </div>
    )
}
