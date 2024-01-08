import { useRef, useState } from "react";
import { useAddUSer } from "../../state/hook/useAddUser";
import useErrorMessage from "../../state/hook/useErrorMessage";
import styles from "./UserForm.module.scss";

const UserForm = () => {
  const [name, setName] = useState("");
  const addToList = useAddUSer();
  const errorMessage = useErrorMessage();

  const inputRef = useRef<HTMLInputElement>(null);

  const addUser = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    addToList(name);
    setName("");
    inputRef.current?.focus();
  };

  return (
    <form onSubmit={addUser} className={styles.formContainer}>
      <input
        ref={inputRef}
        value={name}
        onChange={(ev) => setName(ev.target.value)}
        type="text"
        placeholder="Insira os nomes dos participantes"
        className={styles.formContainer__input}
      />
      <button disabled={!name} className={styles.formContainer__btn}>
        Adicionar
      </button>
      {errorMessage && <p role="alert">{errorMessage}</p>}
    </form>
  );
};

export default UserForm;
