import { TabView, TabPanel } from "primereact/tabview";
import { BasicLayout } from "@/layouts";
import { Button } from "primereact/button";
import { Info, Settings } from "@/components/Account";
import { useRouter } from "next/router";
import { useAuth } from "@/hooks";
import {Separator } from "@/components/Shared"
import styles from "./account.module.scss";

export default function AccountPage() {
  const { user, logout } = useAuth();
  const router = useRouter();

  if (!user) {
    router.push("/");
    return null;
  }

  return (
    <>
      <BasicLayout isContainer relative>
        <Info />
        <TabView className={`${styles.customTabs}`}>
          <TabPanel header="Pedidos">
            <p>Mis pedidos</p>
          </TabPanel>
          <TabPanel header="Lista de deseos">
            <p>Mi lista de deseos</p>
          </TabPanel>
          <TabPanel header="Direcciones">
            <p>Mis direcciones</p>
          </TabPanel>

          <TabPanel header="Ajustes" headerClassName="right-tab">
            <Settings.ChangeNameForm />
            <Separator height={80}/>
          </TabPanel>
          <TabPanel
            header={
              <span className="right-tab">
                <Button
                  icon="pi pi-sign-out"
                  label="Cerrar sesión"
                  className="p-button-text p-button-plain logout-button"
                  onClick={logout}
                />
              </span>
            }
          >
            {/* vacío */}
          </TabPanel>
        </TabView>
      </BasicLayout>
    </>
  );
}
