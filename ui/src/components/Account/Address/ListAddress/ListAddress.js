import React, { useState, useEffect } from "react";
import { Address as AddressCtrl } from "@/api";
import { useAuth } from "@/hooks";
import { Address } from "./Address";
import styles from "./ListAddress.module.scss";

const addressCtrl = new AddressCtrl();

export function ListAddress(props) {
  const { canReload, onReload } = props;
  const [addresses, setAddresses] = useState(null);
  const { user } = useAuth();

  console.log(addresses)
  useEffect(() => {
    (async () => {
      try {
        const response = await addressCtrl.getAll(user.id);
        setAddresses(response.data);
         console.log(addresses)
      } catch (error) {
        throw error;
      }
    })();
  }, [canReload]);

  if (!addresses) return null;
  return (
    <div className={styles.addresses}>
      {addresses.map((item) => (
        <Address
          key={item.id}
          addressId={item.id}
          address={item.address}
          title={item.title}
          state={item.state}
          city={item.city}
          postal_code={item.postal_code}
          name={item.name}
          phone={item.phone}
          onReload={onReload}
        />
      ))}
    </div>
  );
}
