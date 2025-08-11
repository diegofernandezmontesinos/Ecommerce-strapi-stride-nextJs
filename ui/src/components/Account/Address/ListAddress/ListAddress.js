import React, { useState, useEffect } from "react";
import { Address } from "@/api";
import { useAuth } from "@/hooks"
import styles from "./ListAddress.module.scss";

const addressCtrl = new Address();


export function ListAddress() {
  const [addresses, setAddresses] = useState(null);
  const { user } = useAuth();

    useEffect(() => {
        (async () => {
            try {
                const response = await addressCtrl.getAll(user.id);
                setAddresses(response.data);
                console.log(response);
            } catch (error) {
                throw error
            }
        })();
    }, []);

  return <div>ListAddress</div>;
}
