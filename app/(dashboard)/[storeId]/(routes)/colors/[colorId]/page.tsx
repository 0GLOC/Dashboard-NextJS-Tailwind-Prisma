import prismadb from "@/lib/prismadb";
import { ObjectId } from 'bson';

import { ColorForm } from "./components/color-form";

const ColorPage = async ({
    params
}: {
    params: { colorId: string }
}) => {
    const idBson = new ObjectId()

    let realId = '';

    if (params.colorId === "new") {
        realId = String(idBson);
    } else {
        realId = params.colorId;
    }

    const color = await prismadb.color.findUnique({
        where: {
            id: realId
        }
    });

    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <ColorForm initialData={color} />
            </div>
        </div>
    );
};

export default ColorPage;