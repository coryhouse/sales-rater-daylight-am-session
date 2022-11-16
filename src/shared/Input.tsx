type InputProps = {
  /** Input ID
   *
   * Stuff to do:
   * - one
   * - who
   *
   * **Bold text**
   *
   * [More info](https://www.google.com)
   */
  id: string;

  /** Input's label */
  label: string;

  /** Input's type */
  type?: "text" | "number"; // TODO support more later

  /** Called onChange */
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;

  /** Called onBlur */
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;

  /** Input value */
  value: string;
};

export default function Input({
  id,
  label,
  type = "text",
  onChange,
  onBlur,
  value,
}: InputProps) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <br />
      <input
        id={id}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
    </div>
  );
}
