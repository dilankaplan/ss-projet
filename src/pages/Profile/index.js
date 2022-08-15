import { useQuery } from "@apollo/client";
import React from "react";
import { Form } from "react-bootstrap";
import { GET_USER_INFO } from "../../graphql/query";

function ProfilePage() {
  const { loading, error, data } = useQuery(GET_USER_INFO);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="w-100 d-flex flex-column">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="email" disabled value={data.user.name} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Firebase User UID</Form.Label>
          <Form.Control
            type="email"
            disabled
            value={data.user.firebaseUserUID}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Code</Form.Label>
          <Form.Control type="email" disabled value={data.user.code} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Contact</Form.Label>
          <Form.Control type="email" disabled value={data.user.contact} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" disabled value={data.user.email} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Address 1</Form.Label>
          <Form.Control type="email" disabled value={data.user.address1} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Address 2</Form.Label>
          <Form.Control type="email" disabled value={data.user.address2} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Address 3</Form.Label>
          <Form.Control type="email" disabled value={data.user.address3} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>City</Form.Label>
          <Form.Control type="email" disabled value={data.user.city} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Country</Form.Label>
          <Form.Control type="email" disabled value={data.user.country} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Post Code</Form.Label>
          <Form.Control type="email" disabled value={data.user.postCode} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Telephone</Form.Label>
          <Form.Control type="email" disabled value={data.user.telephone} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Telephone 2</Form.Label>
          <Form.Control type="email" disabled value={data.user.telephone2} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Mobile</Form.Label>
          <Form.Control type="email" disabled value={data.user.mobile} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Fax</Form.Label>
          <Form.Control type="email" disabled value={data.user.fax} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Company Name</Form.Label>
          <Form.Control type="email" disabled value={data.user.companyName} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Contact Name</Form.Label>
          <Form.Control type="email" disabled value={data.user.contactName} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Contact Email</Form.Label>
          <Form.Control type="email" disabled value={data.user.contactEmail} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>User Code</Form.Label>
          <Form.Control type="email" disabled value={data.user.userCode} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Credit Limit</Form.Label>
          <Form.Control type="email" disabled value={data.user.creditLimit} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Currency Code</Form.Label>
          <Form.Control type="email" disabled value={data.user.currencyCode} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            checked={data.user.marketingEmailEnabled}
            label="Marketing Email Enabled"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            checked={data.user.marketingSmsEnabled}
            label="Marketing Sms Enabled"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            checked={data.user.marketingNotificationEnabled}
            label="Marketing Notification Enabled"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            checked={data.user.showAllPricesIncludingVat}
            label="Show All Prices Including Vat"
          />
        </Form.Group>
      </Form>
      <span>{data.user.marketingEmailEnabled}</span>
      <span>{data.user.marketingNotificationEnabled}</span>
      <span>{data.user.showAllPricesIncludingVat}</span>
    </div>
  );
}

export default ProfilePage;
