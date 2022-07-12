import React, { useState, useEffect } from "react";
import db from "../firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../features/counter/userSlice";
import "./PlansScreen.css";
import { loadStripe } from "@stripe/stripe-js";
function PlansScreen() {
  const [products, setProducts] = useState([]);
  const user = useSelector(selectUser);
  const [ subscription, setsubscription] = useState(null);

  useEffect(() => {
    db.collection("customers")
    .doc(user.uid )

  })

  // useEffect(() => {
  //   db.collection("products")
  //     .where("active", "==", true)
  //     .get()
  //     .then((querySnapshot) => {
  //       const products = {};
  //       querySnapshot.forEach(async (productDoc) => {
  //         products[productDoc.id] = productDoc.data();
  //         const priceSnap = await productDoc.ref.collection("prices").get();
  //         priceSnap.docs.forEach((price) => {
  //           products[productDoc.id].prices = {
  //             priceId: price.id,
  //             priceData: price.data(),
  //           };
  //         });
  //       });
  //       setProducts(products);
  //     });
  // });
  useEffect(() => {
    db.collection("products")
      .where("active", "==", true)
      .get()
      .then((querySnapshot) => {
        const products = {};
        querySnapshot.forEach(async (productDoc) => {
          products[productDoc.id] = productDoc.data();
          const priceSnap = await productDoc.ref.collection("prices").get();
          priceSnap.docs.forEach((price) => {
            products[productDoc.id].prices = {
              priceId: price.id,
              priceData: price.data(),
            };
          });
        });
        setProducts(products);
      });
  }, []);
  console.log(products);

  return (
    <div className="PlansScreen">
      {Object.entries(products).map(([productId, productData]) => {
        //add some logict to check subscriptions
        // const loadCheckout = async (priceId) => {
        //   const docRef = await db
        //     .collection("customers")
        //     .doc(user.uid)
        //     .collection("checkout_sessions")
        //     .add({
        //       price: priceId,
        //       sucess_url: window.location.origin,
        //       cancel_url: window.location.origin,
        //     });

        //   docRef.onSnapshot(async (snap) => {
        //     const { error, sessionId } = snap.data();
        //     if (error) {
        //       alert(error.message);
        //     }
        //     if (sessionId) {
        //       const stripe = await loadStripe(
        //         "pk_test_51LHX4bSCP706Qdzr8oHNkmpuQX5YoZqGYcbzarZiVBSQEoshfci0AftC1ZmnQtOzppYyZJ5OwrJidUiYsB23egTx00eno1l16V"
        //       );
        //       stripe.redirectToCheckout({ sessionId });
        //     }
        //   });
        // };

        const loadCheckout = async (priceId) => {
          const docRef = await db
            .collection("customers")
            .doc(user.uid)
            .collection("checkout_sessions")
            .add({
              price: priceId,
              success_url: window.location.origin,
              cancel_url: window.location.origin,
            });

          docRef.onSnapshot(async (snap) => {
            const { error, sessionId } = snap.data();
            if (error) {
              alert(`An error occured: ${error.message}`);
            }
            if (sessionId) {
              const stripe = await loadStripe(
                "pk_test_51LHX4bSCP706Qdzr8oHNkmpuQX5YoZqGYcbzarZiVBSQEoshfci0AftC1ZmnQtOzppYyZJ5OwrJidUiYsB23egTx00eno1l16V"
              );
              stripe.redirectToCheckout({ sessionId });
            }
          });
        };

        return (
          <div className="plansScreen_Plan">
            <div className="plansScreen_info">
              <h5>{productData.name}</h5>
              <h5>{productData.description}</h5>
            </div>
            <button onClick={() => loadCheckout(productData.prices.priceId)}>
              Subscribe
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default PlansScreen;
