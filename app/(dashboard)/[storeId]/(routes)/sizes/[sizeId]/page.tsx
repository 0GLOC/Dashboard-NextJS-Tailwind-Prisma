import prismadb from "@/lib/prismadb";
import { ObjectId } from 'bson';

import { SizeForm } from "./components/size-form";

const SizePage = async ({
    params
}: {
    params: { sizeId: string }
}) => {
    const idBson = new ObjectId()

    let realId = '';

    if (params.sizeId === "new") {
        realId = String(idBson);
    } else {
        realId = params.sizeId;
    }

    const size = await prismadb.size.findUnique({
        where: {
            id: realId
        }
    });

    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <SizeForm initialData={size} />
            </div>
        </div>
    );
};

export default SizePage;