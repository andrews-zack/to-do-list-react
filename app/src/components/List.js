

function List() {
    return(
        <ul class="list-group">
            <li class="list-group-item">
                <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox"></input>
                <label class="form-check-label" for="firstCheckbox">Take out the trash</label>
            </li>
            <li class="list-group-item">
                <input class="form-check-input me-1" type="checkbox" value="" id="secondCheckbox"></input>
                <label class="form-check-label" for="secondCheckbox">Clean dishes</label>
            </li>
            <li class="list-group-item">
                <input class="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox"></input>
                <label class="form-check-label" for="thirdCheckbox">Do laundry</label>
            </li>
        </ul>
    )
}

export default List
