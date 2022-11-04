import React from "react";
import { Table, Container, Button } from "react-bootstrap/";

function EditProduct() {
  return (
    <div className="mt-3">
      <Container>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Model/Size</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Color</th>
              <th>subcategory</th>
              <th>tag</th>
              <th>Width</th>
              <th>Height</th>
              <th>Length</th>
              <th>Mass</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mobile</td>
              <td>Samsung</td>
              <td>12000</td>
              <td>3</td>
              <td>black</td>
              <td>Sub</td>
              <td>Tag</td>
              <td>50</td>
              <td>50</td>
              <td>20</td>
              <td>22</td>
              <td>product description</td>
              <td>
                <div className="d-flex">
                  <Button variant="warning"> Edit</Button>{" "}
                  <Button className="ms-2" variant="danger">
                    {" "}
                    Delete
                  </Button>
                </div>
              </td>
            </tr>

            <tr>
              <td>Mobile</td>
              <td>Samsung</td>
              <td>12000</td>
              <td>3</td>
              <td>black</td>
              <td>Sub</td>
              <td>Tag</td>
              <td>50</td>
              <td>50</td>
              <td>20</td>
              <td>22</td>
              <td>product description</td>
              <td>
                <div className="d-flex">
                  <Button variant="warning"> Edit</Button>{" "}
                  <Button className="ms-2" variant="danger">
                    {" "}
                    Delete
                  </Button>
                </div>
              </td>
            </tr>
            <tr>
              <td>Mobile</td>
              <td>Samsung</td>
              <td>12000</td>
              <td>3</td>
              <td>black</td>
              <td>Sub</td>
              <td>Tag</td>
              <td>50</td>
              <td>50</td>
              <td>20</td>
              <td>22</td>
              <td>product description</td>
              <td>
                <div className="d-flex">
                  <Button variant="warning"> Edit</Button>{" "}
                  <Button className="ms-2" variant="danger">
                    {" "}
                    Delete
                  </Button>
                </div>
              </td>
            </tr>
            <tr>
              <td>Mobile</td>
              <td>Samsung</td>
              <td>12000</td>
              <td>3</td>
              <td>black</td>
              <td>Sub</td>
              <td>Tag</td>
              <td>50</td>
              <td>50</td>
              <td>20</td>
              <td>22</td>
              <td>product description</td>
              <td>
                <div className="d-flex">
                  <Button variant="warning"> Edit</Button>{" "}
                  <Button className="ms-2" variant="danger">
                    {" "}
                    Delete
                  </Button>
                </div>
              </td>
            </tr>
            <tr>
              <td>Mobile</td>
              <td>Samsung</td>
              <td>12000</td>
              <td>3</td>
              <td>black</td>
              <td>Sub</td>
              <td>Tag</td>
              <td>50</td>
              <td>50</td>
              <td>20</td>
              <td>22</td>
              <td>product description</td>
              <td>
                <div className="d-flex">
                  <Button variant="warning"> Edit</Button>{" "}
                  <Button className="ms-2" variant="danger">
                    {" "}
                    Delete
                  </Button>
                </div>
              </td>
            </tr>
            <tr>
              <td>Mobile</td>
              <td>Samsung</td>
              <td>12000</td>
              <td>3</td>
              <td>black</td>
              <td>Sub</td>
              <td>Tag</td>
              <td>50</td>
              <td>50</td>
              <td>20</td>
              <td>22</td>
              <td>product description</td>
              <td>
                <div className="d-flex">
                  <Button variant="warning"> Edit</Button>{" "}
                  <Button className="ms-2" variant="danger">
                    {" "}
                    Delete
                  </Button>
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default EditProduct;
