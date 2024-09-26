import React from 'react';
import BookingTableForm from '../form/BookingTableForm';
import styled from 'styled-components'; // تأكد من تثبيت المكتبة

// استخدام styled-components لتصميم الكاردات
const Card = styled.div`
    background-color: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 12px;
    padding: 30px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;
    max-width: 300px;
    margin: 0 auto;

    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }
`;

const CardTitle = styled.h3`
    font-size: 28px;
    font-weight: bold;
    color: #333;
`;

const CardSubtitle = styled.p`
    font-size: 18px;
    color: #777;
    margin-top: 10px;
`;

export default function FeatureV3() {
  return (
    <>
      <div className="feature-style-three-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 pr-80 pr-md-15 pr-xs-15">
              <div className="reservation-form light">
                <i className="fas fa-utensils"></i>
                <h3>Book a table</h3>
                <BookingTableForm />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="relative default-padding-top">
                <div className="food-cat-items">
                  <h2 className="flex-title mb-35">
                    Our Subscriptions 
                  </h2>

                  <div className="row justify-content-center">
                    <div className="col-md-4">
                      <Card>
                        <CardTitle>Premium</CardTitle>
                        <CardSubtitle>Meals: 15</CardSubtitle>
                      </Card>
                    </div>
                    <div className="col-md-4">
                      <Card>
                        <CardTitle>Basic</CardTitle>
                        <CardSubtitle>Meals: 10</CardSubtitle>
                      </Card>
                    </div>
                    <div className="col-md-4">
                      <Card>
                        <CardTitle>VIP</CardTitle>
                        <CardSubtitle>Meals: 20</CardSubtitle>
                      </Card>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
