
function Filter(props) {
   
    return (
        <>
            <div className="filter">
                <div className="result">
                    تعداد محصولات : {props.count} محصول
                </div>
                <div className="sort">
                    <div className="sort-title">مرتب سازی بر اساس</div>
                    <div className="form-checkbox">
                        <div className="form-group">
                            <input type="radio" value="asc" name="radiovalue" onChange={props.mobileFilter} />
                            <label>قدیمی ترین محصولات</label>
                        </div>
                        <div className="form-group">
                            <input type="radio" value="desc" name="radiovalue" onChange={props.mobileFilter}/>
                            <label>جدیدترین محصولات</label>
                        </div>
                    </div>
                </div>
                <div className="brand">
                    <label>برند ها</label>
                    <select value={props.brand} onChange={props.brandFilter}>
                        <option value="">همه</option>
                        <option value="samsung">سامسونگ</option>
                        <option value="huawei">هواوی</option>
                        <option value="iphone">ایفون</option>
                        <option value="blackbry">بلک بری</option>
                        <option value="motorola">موتورولا</option>
                    </select>
                </div>
            </div>
        </>
    );
}

export default Filter;