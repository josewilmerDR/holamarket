//Librerías para mostrar mensajes al usuario.
import React from "react";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// starWarsStore.js
export const sellerStore = {
  sellerList: [],
  vendedor: { msg: "I am a seller" },
  seller: "",
  isSeller: false,
};

export function sellerActions(getStore, getActions, setStore) {
  //AQUI LAS FUNCIONES FETCH: EJEMPLO
  // //FETCH PEOPOPLE.
  // const fetchPeople = async (url) => {
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   return data;
  // };

  return {
    //REALIZA EL LOGIN DEL USUARIO.
    // login: async (email, password) => {
    //   const store = getStore();
    //   const actions = getActions();
    //   console.log(
    //     "Es la encargada de hacer el login del usuario",
    //     email,
    //     password
    //   );

    //   let obj = {
    //     email: email,
    //     password: password,
    //   };

    //   let { respuestaJson, response } = await actions.useFetch(
    //     "/api/login",
    //     obj,
    //     "POST"
    //   );

    //   console.log(response.ok);
    //   console.log(respuestaJson);

    //   if (response.ok) {
    //     //ALMACENAMIENTO.
    //     //LocalStorage: Los datos almacenados en LocalStorage permanecen en el navegador incluso después de cerrar la sesión del usuario o incluso después de cerrar el navegador. Es decir, los datos almacenados en LocalStorage persisten en el tiempo.
    //     //SessionStorage: Los datos almacenados en SessionStorage solo duran mientras la sesión del usuario esté activa. Cuando el usuario cierra la sesión o el navegador, los datos almacenados en SessionStorage se eliminan automáticamente.
    //     //Otra diferencia importante es que los datos almacenados en LocalStorage están disponibles para todas las pestañas y ventanas que se abren con el mismo origen de la página web, mientras que los datos almacenados en SessionStorage solo están disponibles para la pestaña o ventana que los creó.
    //     localStorage.setItem("token", respuestaJson.token);
    //     sessionStorage.setItem("token", respuestaJson.token);
    //     let token = localStorage.getItem("token");
    //     setStore({ ...store, userLogin: true });
    //     // console.log("token", token)
    //     store.usuario = { msg: "usuario logueado" };
    //     localStorage.setItem("userLogin", "true");
    //     console.log(localStorage.getItem("userLogin"));
    //   } else {
    //     console.log("login fallido");
    //     localStorage.setItem("token", "");
    //     sessionStorage.setItem("token", "");
    //     localStorage.setItem("userLogin", "false");
    //     setStore({ ...store, userLogin: false });
    //     store.usuario = { msg: "login fallido" };
    //   }

    //   return store.usuario;
    // },

    createSeller: async (name, email, taxId, description, phone, address) => {
      const store = getStore();
      const actions = getActions();
      console.log("Es la encargada de crear al venededor", name, email);

      let obj = {
        name: name,
        email: email,
        tax_id: taxId,
        description: description,
        phone,
        address: address,
      };

      let { respuestaJson, response } = await actions.useFetch(
        "/routes_seller/create-seller",
        obj,
        "POST"
      );

      console.log(response.ok);
      console.log(respuestaJson);

      if (response.ok) {
        setStore({ ...store, isSeller: true });
        store.vendedor = { msg: "Vendedor creado exitosamente" };
      } else {
        setStore({ ...store, isSeller: false });
        store.isSeller = { msg: "Registro fallido" };
      }

      return store.isSeller;
    },

    // userUpdate: async (name, lastName, password) => {
    //   const store = getStore();
    //   const actions = getActions();
    //   console.log(
    //     "Es la encargada de hacer el login del usuario",
    //     password,
    //     name,
    //     lastName
    //   );

    //   let obj = {
    //     name: name,
    //     lastname: lastName,
    //     password: password,
    //   };

    //   let { respuestaJson, response } = await actions.useFetch(
    //     "/api/myaccount/update",
    //     obj,
    //     "POST"
    //   );

    //   console.log(response.ok);
    //   console.log(respuestaJson);

    //   // Manejar errores y mostrar notificación al usuario
    //   if (!response.ok) {
    //     if (respuestaJson.message) {
    //       toast.error(respuestaJson.message);
    //     } else {
    //       toast.error("Ha ocurrido un error inesperado");
    //     }
    //   } else {
    //     // Actualizar información del usuario en el store
    //     store.usuario = respuestaJson;
    //     toast.success("Información del usuario actualizada");
    //   }

    //   return store.usuario;
    // },

    // userUpdate: async (name, lastName, email) => {
    //   const store = getStore();
    //   const actions = getActions();
    //   console.log("Es la encargada de hacer el login del usuario", email, name);

    //   let obj = {
    //     name: name,
    //     lastname: lastName,
    //     email: email,
    //   };

    //   let { respuestaJson, response } = await actions.useFetch(
    //     "/api/myaccount/update",
    //     obj,
    //     "POST"
    //   );

    //   console.log(response.ok);
    //   console.log(respuestaJson);

    //   return store.usuario;
    // },

    // logout: async () => {
    //   let actions = getActions();
    //   let store = getStore();
    //   let { respuestaJson, response } = await actions.useFetch("/api/logout");
    //   if (response.ok) {
    //     localStorage.setItem("token", "");
    //     sessionStorage.setItem("token", "");
    //     localStorage.removeItem("userLogin");
    //     setStore({ ...store, userLogin: false });
    //     console.log(respuestaJson);
    //   }
    // },

    // deleteAccount: async () => {
    //   const userConfirmation = window.confirm(
    //     "¿Estás seguro de que deseas eliminar tu cuenta? Esta acción no se puede deshacer."
    //   );

    //   if (userConfirmation) {
    //     let actions = getActions();
    //     let store = getStore();
    //     let { respuestaJson, response } = await actions.useFetch(
    //       "/api/myaccount/delete",
    //       {},
    //       "DELETE"
    //     );
    //     if (response.ok) {
    //       localStorage.setItem("token", "");
    //       sessionStorage.setItem("token", "");
    //       setStore({ ...store, userLogin: false });
    //       console.log(respuestaJson);
    //     }
    //   } else {
    //     console.log("El usuario canceló la eliminación de la cuenta.");
    //   }
    // },
    // recover: async (password, token) => {
    //   const store = getStore();
    //   const actions = getActions();
    //   let body = {
    //     token: token,
    //     password: password,
    //   };
    //   let { respuestaJson, response } = await actions.useFetch(
    //     "/api/new_password",
    //     body,
    //     "PUT"
    //   );
    //   return { respuestaJson, response };
    // },
    // linkrecoverpassword: async (email) => {
    //   const store = getStore();
    //   const actions = getActions();
    //   let body = {
    //     email: email,
    //   };
    //   let { respuestaJson, response } = await actions.useFetch(
    //     "/api/reset_password",
    //     body,
    //     "POST"
    //   );
    //   return { respuestaJson, response };
    // },
    // deleteAccount: async () => {
    //   let actions = getActions();
    //   let store = getStore();
    //   let { respuestaJson, response } = await actions.useFetch(
    //     "/api/myaccount/delete",
    //     {},
    //     "DELETE"
    //   );
    //   if (response.ok) {
    //     localStorage.setItem("token", "");
    //     sessionStorage.setItem("token", "");
    //     setStore({ ...store, userLogin: false });
    //     console.log(respuestaJson);
    //   }
    // },
  };
}
