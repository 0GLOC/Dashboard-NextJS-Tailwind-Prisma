import prismadb from "@/lib/prismadb";
import { ObjectId } from 'bson';

import { CategoryForm } from "./components/category-form";

const CategoryPage = async ({
    params
}: {
    params: { categoryId: string , storeId: string }
}) => {
    const idBson = new ObjectId()

    let realId = '';

    if (params.categoryId === "new") {
        realId = String(idBson);
    } else {
        realId = params.categoryId;
    }

    const category = await prismadb.category.findUnique({
        where: {
            id: realId
        }
    });

    const billboard = await prismadb.billboard.findMany({
        where: {
            storeId: params.storeId
        }
    });

    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <CategoryForm 
                    billboards={billboard} 
                    initialData={category} 
                />
            </div>
        </div>
    );
};

export default CategoryPage;