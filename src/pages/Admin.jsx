import AdminLayout from "../components/admin/AdminLayout";
import DashboardCards from "../components/admin/DashboardCards";
import ProductTable from "../components/admin/ProductTable";

import useProducts from "../hooks/useProducts";

function Admin() {

    const {

        products,

        loading,

        removeProduct,

    } = useProducts();

    if(loading){

        return <h2>Loading...</h2>;

    }

    return(

        <AdminLayout>

            <DashboardCards/>

            <ProductTable

                products={products}

                onDelete={removeProduct}

            />

        </AdminLayout>

    );

}

export default Admin;