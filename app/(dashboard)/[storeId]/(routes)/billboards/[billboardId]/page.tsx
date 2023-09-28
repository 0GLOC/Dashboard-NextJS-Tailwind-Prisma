import prismadb from "@/lib/prismadb";
import { ObjectId } from 'bson';

import { BillboardForm } from "./components/billboard-form";

const BillboardsPage = async ({
    params
}: {
    params: { billboardId: string }
}) => {
    const idBson = new ObjectId()

    let realId = '';

    if (params.billboardId === "new") {
        realId = String(idBson);
    } else {
        realId = params.billboardId;
    }

    const billboard = await prismadb.billboard.findUnique({
        where: {
            id: realId
        }
    });

    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <BillboardForm initialData={billboard} />
            </div>
        </div>
    );
};

export default BillboardsPage;