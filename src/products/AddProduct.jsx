import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap/";
function AddProduct() {
  return (
    <div className="mt-3 ">
      <Container>
        <h2 className="text-center">Add product</h2>
        <Form className="shadow p-3">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-sm-12">
              <Form.Group className="mb-3" controlId="product">
                <Form.Label>Product Name</Form.Label>
                <Form.Control type="text" placeholder="Enter product name" />
                <Form.Text className="text-muted">this for error</Form.Text>
              </Form.Group>
            </div>
            <div className="col-lg-5 col-sm-12">
              <Form.Group className="mb-3" controlId="model">
                <Form.Label>Model/Size name</Form.Label>
                <Form.Control type="text" placeholder="Enter Model/Size name" />
                <Form.Text className="text-muted">this for error</Form.Text>
              </Form.Group>
            </div>

            <div className="col-lg-5 col-sm-12">
              <Form.Group className="mb-3" controlId="price">
                <Form.Label>Price</Form.Label>
                <Form.Control type="text" placeholder="Enter price" />
                <Form.Text className="text-muted">this for error</Form.Text>
              </Form.Group>
            </div>
            <div className="col-lg-5 col-sm-12">
              <Form.Group className="mb-3" controlId="quantity">
                <Form.Label>Quantity</Form.Label>
                <Form.Control type="text" placeholder="Enter quantity" />
                <Form.Text className="text-muted">this for error</Form.Text>
              </Form.Group>
            </div>
            <div className="col-lg-5 col-sm-12">
              <Form.Group className="mb-3" controlId="color">
                <Form.Label>Color</Form.Label>
                <Form.Control type="text" placeholder="Enter color" />
                <Form.Text className="text-muted">this for error</Form.Text>
              </Form.Group>
            </div>
            <div className="col-lg-5 col-sm-12">
              <Form.Group className="mb-3" controlId="subcategory">
                <Form.Label>Sub Category</Form.Label>
                <Form.Control type="text" placeholder="Enter subcategory" />
                <Form.Text className="text-muted">this for error</Form.Text>
              </Form.Group>
            </div>
            <div className="col-lg-5 col-sm-12">
              <Form.Group className="mb-3" controlId="tag">
                <Form.Label>Tag</Form.Label>
                <Form.Control type="text" placeholder="Enter tag" />
                <Form.Text className="text-muted">this for error</Form.Text>
              </Form.Group>
            </div>
            <div className="col-lg-5 col-sm-12">
              <Form.Group className="mb-3" controlId="width">
                <Form.Label>Width</Form.Label>
                <Form.Control type="text" placeholder="Enter width" />
                <Form.Text className="text-muted">this for error</Form.Text>
              </Form.Group>
            </div>
            <div className="col-lg-5 col-sm-12">
              <Form.Group className="mb-3" controlId="height">
                <Form.Label>Height</Form.Label>
                <Form.Control type="text" placeholder="Enter Height(cm)" />
                <Form.Text className="text-muted">this for error</Form.Text>
              </Form.Group>
            </div>
            <div className="col-lg-5 col-sm-12">
              <Form.Group className="mb-3" controlId="length">
                <Form.Label>Length</Form.Label>
                <Form.Control type="text" placeholder="Enter length" />
                <Form.Text className="text-muted">this for error</Form.Text>
              </Form.Group>
            </div>
            <div className="col-lg-5 col-sm-12">
              <Form.Group className="mb-3" controlId="mass">
                <Form.Label>Mass</Form.Label>
                <Form.Control type="text" placeholder="Enter mass" />
                <Form.Text className="text-muted">this for error</Form.Text>
              </Form.Group>
            </div>
            <div className="col-lg-5 col-sm-12">
              <Form.Group className="mb-3" controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" placeholder="Enter mass" />
              </Form.Group>
            </div>
          </div>
        </Form>
      </Container>
    </div>
  );
}

export default AddProduct;
