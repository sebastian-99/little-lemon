import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import Select from "react-select";
import {
  handleNumber,
  handleName,
  getNameBilling,
  getCountryBilling,
  getNameCard,
  getCard,
  getCardCVV,
  getCardExpiryMonth,
  getCardExpiryYear,
  submitBilling,
} from "./webPaymentHelper";
const WebPayment = () => {
  const location = useLocation();
  const navi = useNavigate();
  const [card, setCard] = useState({
    billing: {
      name: null,
      country: "United State Of America",
    },
    payment: {
      name: null,
      card: null,
      cvv: null,
      expiry: {
        month: null,
        year: null,
      },
    },
  });
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h4 className="text-center">No commitment. Cancel anytime.</h4>
          <div className="row mt-4">
            <div className="col-6">
              <p className="fw-light text-center">Temporary subscription</p>
            </div>
            <div className="col-6">
              <b>Until Table is Taken</b>
              <p>then $5 USD</p>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <p className="fs-5 fw-semibold text-center">Today’s Total:</p>
            </div>
            <div className="col-6">
              <p className="fs-4  fw-semibold">$5 USD</p>
            </div>
          </div>
          <hr />
          <h4 className="text-center">Summary</h4>
          <div className="row my-5">
            <div className="col-4 d-flex justify-content-center">
              <h5>
                <span className="badge rounded-pill bg-primary align-items-center d-flex p-3">
                  <i className="fa-solid fa-clock me-2"></i>
                  {location.state.time}
                </span>
              </h5>
            </div>
            <div className="col-4 d-flex justify-content-center">
              <h5>
                <span className="badge rounded-pill bg-primary align-items-center d-flex p-3">
                  <i className="fa-solid fa-calendar me-2"></i>
                  {location.state.date}
                </span>
              </h5>
            </div>
            <div className="col-4 d-flex justify-content-center">
              <h5>
                <span className="badge rounded-pill bg-primary align-items-center d-flex p-3">
                  <i className="fa-solid fa-user me-2"></i>
                  {location.state.guests}
                </span>
              </h5>
            </div>
          </div>
          <hr />
          <p className="p-5 text-center fw-light">
            Your subscription begins today until the booked table is taken. If
            you decide to stop before the deadline, visit My Bookings to cancel
            your card won’t be charged. We can’t issue refunds once your card is
            charged.
          </p>
        </div>
      </div>
      <div className="mt-3">
        <h2>
          <i className="fa-solid fa-file-lines me-2"></i>Billing information
        </h2>
        <div className="mt-3">
          <label htmlFor="name-input" className="color-text-little">
            Name
          </label>
          <input
            type="text"
            className={`form-control mt-2 ${
              card.billing.name == "" ? "is-invalid" : ""
            }`}
            id="name-input"
            onBlur={(event) =>
              getNameBilling({ event: event, setCard: setCard })
            }
            onKeyDown={(event) => {
              handleName(event);
            }}
          />
          {card.billing.name == "" && (
            <div id="validationNameBill" className="invalid-feedback">
              Write a billing name
            </div>
          )}
          <label htmlFor="select-country" className="color-text-little mt-2">
            Country
          </label>
          <Select
            id="select-country"
            className="mt-2"
            options={[
              {
                value: "Mexico",
                label: "Mexico",
              },
              {
                value: "United State Of America",
                label: "United State Of America",
              },
            ]}
            defaultValue={{
              value: "United State Of America",
              label: "United State Of America",
            }}
            onChange={(event) =>
              getCountryBilling({ event: event, setCard: setCard })
            }
          />
          {card.billing.country == "" && (
            <div id="validationCountryBill" className="invalid-feedback">
              Select a country
            </div>
          )}
        </div>
      </div>
      <div className="card mt-3">
        <div className="card-body">
          <div className="mt-3">
            <h2>
              <i className="fa-solid fa-credit-card me-2" />
              Payment method
            </h2>
            <div>
              <label
                htmlFor="select-country"
                className="color-text-little mt-2"
              >
                Name card:
              </label>
              <input
                type="text"
                className={`form-control mt-2 ${
                  card.payment.name == "" ? "is-invalid" : ""
                }`}
                id="name-card"
                onKeyDown={(event) => {
                  handleName(event);
                }}
                onBlur={(event) =>
                  getNameCard({ event: event, setCard: setCard })
                }
              />
              {card.payment.name == "" && (
                <div id="validationCardName" className="invalid-feedback">
                  Write the card owner
                </div>
              )}
              <label
                htmlFor="select-country"
                className="color-text-little mt-2"
              >
                Card:
              </label>
              <input
                type="text"
                className={`form-control mt-2 ${
                  card.payment.card == "" ||
                  (card.payment.card && card.payment.card.length < 12)
                    ? "is-invalid"
                    : ""
                }`}
                id="name-card"
                maxLength={16}
                onKeyDown={(event) => {
                  handleNumber(event);
                }}
                onBlur={(event) => getCard({ event: event, setCard: setCard })}
              />
              {card.payment.card == "" ||
                (card.payment.card && card.payment.card.length < 12 && (
                  <div id="validationCardNuber" className="invalid-feedback">
                    Write the card number
                  </div>
                ))}
              <label
                htmlFor="select-country"
                className="color-text-little mt-2"
              >
                CVV:
              </label>
              <input
                type="text"
                className={`form-control mt-2 ${
                  card.payment.cvv == "" ||
                  (card.payment.cvv && card.payment.cvv.length < 3)
                    ? "is-invalid"
                    : ""
                }`}
                id="name-card"
                maxLength={4}
                onKeyDown={(event) => handleNumber(event)}
                onBlur={(event) =>
                  getCardCVV({ event: event, setCard: setCard })
                }
              />
              {card.payment.cvv == "" ||
                (card.payment.cvv && card.payment.cvv.length < 3 && (
                  <div id="validationCardNuber" className="invalid-feedback">
                    Write the CVV
                  </div>
                ))}
              <label
                htmlFor="select-country"
                className="color-text-little mt-2"
              >
                Expiration date (MM/YY):
              </label>
              <div className="row">
                <div className="col-3">
                  <input
                    type="text"
                    className={`form-control mt-2 ${
                      card.payment.expiry.month == "" ? "is-invalid" : ""
                    }`}
                    id="name-card"
                    maxLength={2}
                    onKeyDown={(event) => handleNumber(event)}
                    onBlur={(event) =>
                      getCardExpiryMonth({ event: event, setCard: setCard })
                    }
                  />
                  {card.payment.expiry.month == "" && (
                    <div id="validationCardMonth" className="invalid-feedback">
                      Write the expiration month
                    </div>
                  )}
                </div>
                <div className="col-3">
                  <input
                    type="text"
                    className={`form-control mt-2 ${
                      card.payment.expiry.year == "" ? "is-invalid" : ""
                    }`}
                    id="name-card"
                    maxLength={2}
                    onKeyDown={(event) => handleNumber(event)}
                    onBlur={(event) =>
                      getCardExpiryYear({ event: event, setCard: setCard })
                    }
                  />
                  {card.payment.expiry.year == "" && (
                    <div id="validationCardMonth" className="invalid-feedback">
                      Write the expiration year
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-grid gap-2 col-3 mx-auto mt-4">
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => submitBilling({ card: card, navigate: navi })}
        >
          Start Booking
        </button>
      </div>
      <p className="text-center fs-4 fw-semibold mt-3">
        You won’t be charged today
      </p>
    </>
  );
};

export default WebPayment;
