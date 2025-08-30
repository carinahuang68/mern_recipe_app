import DeleteButton from "./DeleteButton"
import EditButton from "./EditButton"
import ViewButton from "./ViewButton"

export default function CardButtons() {
    return (
        <div id="card-buttons" className="d-flex justify-content-between mt-2">
            <div className="d-flex column-gap-3 align-self-center">
                <DeleteButton />
                <EditButton />
            </div>
            <ViewButton />
        </div>
    )
}