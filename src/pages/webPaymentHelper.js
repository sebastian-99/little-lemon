import { toast } from "react-toastify";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
export function handleNumber(event) {
  if (
    event.key === "Backspace" ||
    event.key === "Delete" ||
    event.key === "Tab" ||
    event.key === "ArrowLeft" ||
    event.key === "ArrowRight"
  ) {
    return;
  }

  if (!/^[0-9]*\.?[0-9]*$/.test(event.key)) {
    event.preventDefault();
  }
}

export function handleName(event) {
  if (
    event.key === "Backspace" ||
    event.key === "Delete" ||
    event.key === "Tab" ||
    event.key === "ArrowLeft" ||
    event.key === "ArrowRight" ||
    event.key === " "
  ) {
    return;
  }

  if (!/^[a-zA-Z]+$/.test(event.key)) {
    event.preventDefault();
  }
}

export const getNameBilling = ({ event, setCard }) => {
  const name = event.target.value;
  setCard((prev) => {
    return {
      ...prev,
      billing: {
        ...prev.billing,
        name: name,
      },
    };
  });
};
export const getCountryBilling = ({ event, setCard }) => {
  const country = event.value;
  setCard((prev) => {
    return {
      ...prev,
      billing: {
        ...prev.billing,
        country: country,
      },
    };
  });
};
export const getNameCard = ({ event, setCard }) => {
  const name = event.target.value;
  setCard((prev) => {
    return {
      ...prev,
      payment: {
        ...prev.payment,
        name: name,
      },
    };
  });
};
export const getCard = ({ event, setCard }) => {
  const card = event.target.value;
  setCard((prev) => {
    return {
      ...prev,
      payment: {
        ...prev.payment,
        card: card,
      },
    };
  });
};
export const getCardCVV = ({ event, setCard }) => {
  const cvv = event.target.value;
  setCard((prev) => {
    return {
      ...prev,
      payment: {
        ...prev.payment,
        cvv: cvv,
      },
    };
  });
};
export const getCardExpiryMonth = ({ event, setCard }) => {
  const month = event.target.value;
  setCard((prev) => {
    return {
      ...prev,
      payment: {
        ...prev.payment,
        expiry: {
          ...prev.payment.expiry,
          month: month,
        },
      },
    };
  });
};
export const getCardExpiryYear = ({ event, setCard }) => {
  const year = event.target.value;
  setCard((prev) => {
    return {
      ...prev,
      payment: {
        ...prev.payment,
        expiry: {
          ...prev.payment.expiry,
          year: year,
        },
      },
    };
  });
};

export const submitBilling = ({ card, navigate }) => {
  if (
    card.billing.name == null ||
    card.billing.name == "" ||
    card.billing.country == null ||
    card.payment.name == null ||
    card.payment.name == "" ||
    card.payment.card == null ||
    card.payment.card == "" ||
    card.payment.cvv == null ||
    card.payment.cvv == "" ||
    card.payment.expiry.month == null ||
    card.payment.expiry.month == "" ||
    card.payment.expiry.year == null ||
    card.payment.expiry.year == ""
  ) {
    toast.warning("Please write all the information required");
    return;
  }
  const Myswal = withReactContent(Swal);
  Myswal.fire({
    title: "Processing the payment...Please wait",
    background: "#fff",
    showConfirmButton: false,
    showCancelButton: false,
    allowOutsideClick: false,
    allowEscapeKey: false,
    html: `
        <div class="container my-4">
            <div class="spinner-border text-danger" style="width: 3rem; height: 3rem;" role="status">
                <span class="visually-hidden"">Loading...</span>
            </div>
        </div>
        `,
  });
  setTimeout(() => {
    Myswal.fire({
      title: "Payment complete",
      text: "Your payment have been successfully, your ticket will be send to your mailbox",
      background: "#fff",
      showConfirmButton: false,
      showCancelButton: false,
      allowOutsideClick: true,
      allowEscapeKey: true,
      showCloseButton: true,
      icon: "success",
    });
    navigate("/");
  }, 1500);
};
