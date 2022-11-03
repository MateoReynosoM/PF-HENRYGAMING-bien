//import { StyleSheet } from 'react-native'
import React from "react";
import { Formik } from "formik";
import {
    usePostProductMutation,
    useGetCategoriesQuery,
    useGetBrandsQuery,
} from "../../redux/rtk-api";
//import "./styles/ProductForm.css"

//especificaciones
import { espec, propsFormik } from "../../utils/specFunctionForm";
import Form from "react-bootstrap/Form";
import {
    Card,
    Col,
    Row,
    Button,
    FloatingLabel,
    Container,
} from "react-bootstrap";
import { Navigate } from "react-router-dom";

/* {
    img: "",
    category: undefined,
    brand: undefined,
    model: "",
    price: "",
    detail: "",
    detail0: "",
    detail1: "",
    detail2: "",

} */

export default function ProductForm() {
    let type;
    const [createProduct] = usePostProductMutation();
    let { data: categories } = useGetCategoriesQuery();
    const { data: brands } = useGetBrandsQuery();
    let detail0, detail1, detail2;
    let detailArr;
    let initValue = {
        img: "",
        category: undefined,
        brand: undefined,
        model: "",
        price: "",
    };
    //route protection
    const isAdmin = sessionStorage.getItem("admin");
    if (!isAdmin) {
        return <Navigate to="/home" />;
    }

    return (
        <Container>
            <h1>Formulario de Carga</h1>
            <Formik
                initialValues={initValue}
                validate={(values) => {
                    let errors = {};
                    console.log(values.category);
                    if (!values.img) {
                        errors.img = "Requerido";
                    } else if (
                        !/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|svg)/.test(
                            values.img
                        )
                    ) {
                        errors.img = "Debe ser una Url valida";
                    }
                    if (!values.category) {
                        errors.category = "Requerido";
                    } else if (!/^[A-Z \d\W]+$/.test(values.category)) {
                        errors.category =
                            "Toda la palabra debe estar en mayuscula";
                    }
                    if (!values.brand) {
                        errors.brand = "Requerido";
                    } else if (!/^[A-Z][a-zA-Z0-9]{1,19}$/.test(values.brand)) {
                        errors.brand =
                            "La primera letra debe estar en mayuscula";
                    }
                    if (!values.model) {
                        errors.model = "Requerido";
                    } else if (values.model.length > 15) {
                        errors.model =
                            "El nombre del modelo es demasiado largo";
                    }
                    if (!values.price) {
                        errors.price = "Requerido";
                    } else if (values.price < 0 || values.price > 1000000) {
                        errors.price = "Excede de limites razonables";
                    }
                    if (!values.detail0) {
                        errors.detail0 = "Requerido";
                    } else if (
                        values.detail0.length > 15 ||
                        values.detail0.length < 2
                    ) {
                        errors.detail0 =
                            "La especificacion es demasiado larga o corta";
                    }

                    if (!values.detail1) {
                        errors.detail1 = "Requerido";
                    } else if (
                        values.detail1.length > 15 ||
                        values.detail1.length < 2
                    ) {
                        errors.detail1 =
                            "La especificacion es demasiado larga o corta";
                    }

                    if (!values.detail2) {
                        errors.detail2 = "Requerido";
                    } else if (
                        values.detail2.length > 15 ||
                        values.detail2.length < 2
                    ) {
                        errors.detail2 =
                            "La especificacion es demasiado larga o corta";
                    }

                    /*if(!values.detail2){
            errors.detail2 = 'Requerido';
          }else if(typeof !!values.detail2 !== 'boolean'){
            errors.detail2 = 'Debe Verdadero o Falso'
          }*/

                    //Validacion extra
                    if (
                        values.category &&
                        /^[A-Z \d\W]+$/.test(values.category)
                    ) {
                        initValue = {
                            ...initValue,
                            ...Object.values(propsFormik(values.category)),
                        };
                        type = values.category;
                        detailArr = Object.entries(
                            propsFormik(values.category)
                        );
                    }

                    return errors;
                }}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    setSubmitting(true);
                    let { img, price, model, category, brand, ...data } =
                        values;
                    console.log(data);
                    let formData = {
                        img,
                        price,
                        model,
                        category,
                        brand,
                    };
                    formData.detail = JSON.stringify({
                        ...data,
                    });
                    console.log(formData);
                    //post
                    createProduct(formData);
                    console.log(data);

                    resetForm();

                    setSubmitting(false);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <Card>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleSubmit();
                            }}
                            className="p-3"
                        >
                            <div>
                                <FloatingLabel
                                    className="mb-3"
                                    controlId="floatingImg"
                                    label="Imagen"
                                >
                                    <Form.Control
                                        type={"img"}
                                        name={"img"}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.img}
                                    />
                                    {errors.img && touched.img && errors.img}
                                </FloatingLabel>
                                <Row>
                                    <Col>
                                        <FloatingLabel
                                            controlId="floatingCategoies"
                                            label="Tipos"
                                        >
                                            {typeof values.category ===
                                            "string" ? (
                                                <Form.Control
                                                    type={"category"}
                                                    name={"category"}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.category}
                                                    className="mb-3"
                                                />
                                            ) : (
                                                <Form.Select
                                                    name="category"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className="mb-3"
                                                >
                                                    <option value={"NULL"}>
                                                        Elegir
                                                    </option>
                                                    {categories?.map((e) => {
                                                        return (
                                                            <option
                                                                key={e.id}
                                                                value={e.name}
                                                            >
                                                                {e.name}
                                                            </option>
                                                        );
                                                    })}
                                                    <option value={""}>
                                                        Crear
                                                    </option>
                                                </Form.Select>
                                            )}
                                            {errors.category &&
                                                touched.category &&
                                                errors.category}
                                        </FloatingLabel>
                                    </Col>
                                    <Col>
                                        <FloatingLabel
                                            controlId="floatingBrands"
                                            label="Marca"
                                        >
                                            {typeof values.brand ===
                                            "string" ? (
                                                <Form.Control
                                                    type={"brand"}
                                                    name={"brand"}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.brand}
                                                />
                                            ) : (
                                                <Form.Select
                                                    name="brand"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                >
                                                    <option value={"NULL"}>
                                                        Elegir
                                                    </option>
                                                    {brands?.map((e) => {
                                                        return (
                                                            <option
                                                                key={e.id}
                                                                value={e.name}
                                                            >
                                                                {e.name}
                                                            </option>
                                                        );
                                                    })}
                                                    <option value={""}>
                                                        Crear
                                                    </option>
                                                </Form.Select>
                                            )}
                                            {errors.brand &&
                                                touched.brand &&
                                                errors.brand}
                                        </FloatingLabel>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <FloatingLabel
                                            controlId="floatingModel"
                                            label="Modelo"
                                            className="mb-3"
                                        >
                                            <Form.Control
                                                type={"model"}
                                                name={"model"}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.model}
                                            />
                                            {errors.model &&
                                                touched.model &&
                                                errors.model}
                                        </FloatingLabel>
                                    </Col>
                                    <Col>
                                        <FloatingLabel
                                            controlId="floatingPrice"
                                            label="Precio"
                                            className="mb-3"
                                        >
                                            <Form.Control
                                                type={"price"}
                                                name={"price"}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.price}
                                            />
                                            {errors.price &&
                                                touched.price &&
                                                errors.price}
                                        </FloatingLabel>
                                    </Col>
                                </Row>
                                <Form.Group>
                                    {type ? (
                                        espec(
                                            values,
                                            errors,
                                            touched,
                                            handleChange,
                                            handleBlur,
                                            detailArr
                                        )
                                    ) : (
                                        <></>
                                    )}
                                </Form.Group>
                                <Button
                                    className="m-3"
                                    style={{ float: "right" }}
                                    type="submit"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? "Enviando" : "Enviar"}
                                </Button>
                            </div>
                        </form>
                    </Card>
                )}
            </Formik>
        </Container>
    );
}

//const styles = StyleSheet.create({})
