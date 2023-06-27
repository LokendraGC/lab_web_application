import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useAdminStore } from "../../../store";

export const getAllComponents = () => {
  const fetchComponents = async () => {
    try {
      const { data } = await axios.get("http://localhost:8000/components/all");
      return await data;
    } catch (err) {
      alert(err);
    }
  };

  let { data, ...rest } = useQuery({
    queryKey: ["/components"],
    queryFn: fetchComponents,
  });

  return { data: data || [], ...rest };
};
export const getAStudentComponents = ({ params }) => {
  const getAssignedComponents = async () => {
    const { data } = await axios.post(
      `http://localhost:8000/students/components`,
      {
        studentID: params,
      }
    );
    return await data;
  };

  let { data, ...rest } = useQuery({
    queryKey: ["/student/components"],
    queryFn: getAssignedComponents,
  });

  return { data: data || [], ...rest };
};
export const createComponent = () => {
  const token = useAdminStore((state) => state.tokenValue);
  const queryClient = useQueryClient();
  const createAComponent = async ({ name, quantity, image, category }) => {
    try {
      const headers = {
        headers: {
          Authorization: `Bearer ${token}`,

          "content-type": "multipart/form-data",
        },
      };
      const form = new FormData();
      form.append("name", name);
      form.append("quantity", quantity);
      form.append("image", image);
      form.append("category", category);
      const { data } = await axios.post(
        "http://localhost:8000/components/",
        form,
        headers
      );
      console.log(await data);
      if (await data.msg) alert(await data?.msg);
      else {
        console.log("data", data);
        let errValues = Object.entries(data);
        console.log(errValues);
        for (let i = 0; i < errValues.length; i++) {
          alert(errValues[i]);
        }
        // await data.map((i) => console.log(i));
      }

      return await data;
    } catch (err) {
      alert(err.response.data.detail ?? err);
    }
  };

  return useMutation({
    mutationFn: createAComponent,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["/components"],
        type: "inactive", // only invalidate inactive queries
        refetchType: "inactive", // refetch all inactive stale data
      });
    },
  });
};
export const updateComponent = () => {
  const token = useAdminStore((state) => state.tokenValue);
  const queryClient = useQueryClient();
  const updateAComponent = async ({ id, name, quantity, image, category }) => {
    try {
      const headers = {
        headers: {
          Authorization: `Bearer ${token}`,

          "content-type": "multipart/form-data",
        },
      };
      const form = new FormData();
      form.append("name", id);
      form.append("name", name);
      form.append("quantity", quantity);
      if (image !== undefined) form.append("image", image);
      form.append("category", category);
      const { data } = await axios.patch(
        `http://localhost:8000/components/${id}/`,
        form,
        headers
      );
      if (await data.message) alert(await data?.message);
      else {
        let errValues = Object.entries(data);
        for (let i = 0; i < errValues.length; i++) {
          alert(errValues[i]);
        }
      }
      return await data;
    } catch (err) {
      alert(err.response.data.detail ?? err);
    }
  };

  return useMutation({
    mutationFn: updateAComponent,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["/components"],
        // refetch all inactive stale data
      });
    },
  });
};
export const deleteComponent = () => {
  const token = useAdminStore((state) => state.tokenValue);

  const queryClient = useQueryClient();
  const deleteItem = async ({ id }) => {
    try {
      const headers = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.delete(
        `http://localhost:8000/components/${id}`,
        headers
      );
      if (await data.message) alert(await data?.message);
      else {
        console.log("data", data);
        let errValues = Object.entries(data);
        console.log(errValues);
        for (let i = 0; i < errValues.length; i++) {
          alert(errValues[i]);
        }
        // await data.map((i) => console.log(i));
      }
      return await data;
    } catch (err) {
      alert(err.response.data.detail ?? err);
    }
  };

  return useMutation({
    mutationFn: deleteItem,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["/components"],
        // refetch all inactive stale data
      });
    },
  });
};
export const assignComponent = () => {
  const token = useAdminStore((state) => state.tokenValue);
  const queryClient = useQueryClient();
  const assignAComponent = async (postData) => {
    try {
      const headers = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axios.post(
        `http://localhost:8000/students/postComponent`,
        postData,
        headers
      );
      if (await data.message) alert(await data?.message);
      else {
        let errValues = Object.entries(data);
        for (let i = 0; i < errValues.length; i++) {
          alert(errValues[i]);
        }
        // await data.map((i) => console.log(i));
      }
      return await data;
    } catch (err) {
      alert(err.response.data.detail ?? err);
    }
  };

  return useMutation({
    mutationFn: assignAComponent,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["/components"],
        type: "inactive", // only invalidate inactive queries
        refetchType: "inactive",
        // refetch all inactive stale data
      });
    },
  });
};
export const returnComponent = () => {
  const token = useAdminStore((state) => state.tokenValue);
  const queryClient = useQueryClient();
  const returnComp = async ({ name, qty, studentID }) => {
    try {
      const headers = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axios.put(
        "http://localhost:8000/students/postComponent",
        {
          studentID: studentID,
          quantity: qty,
          returned: true,
          component: name,
        },
        headers
      );
      alert(data?.message);
    } catch (err) {
      alert(err.response.data.detail ?? err);
    }
  };

  return useMutation({
    mutationFn: returnComp,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["/student/components"],

        // refetch all inactive stale data
      });
    },
  });
};
// export const useUpdateUserFavourites = ({ username }) => {
//   const queryClient = useQueryClient();

//   const updater = async ({ mode, roomName }) => {
//     if (!username) return {};

//     const formData = new FormData();
//     formData.append("username", username);
//     formData.append("mode", mode);
//     formData.append("roomname", roomName);

//     const response = await fetch(
//       "https://explorug.com/archanastools/Utilities/ConnecttoDB.aspx",
//       {
//         method: "POST",
//         body: formData,
//       }
//     );

//     return await response.json();
//   };

//   return useMutation({
//     mutationFn: updater,
//     onSuccess: () => {
//       if (!username) return;
//       queryClient.invalidateQueries({
//         queryKey: ["/users/favourites", username],
//       });
//     },
//   });
// };
