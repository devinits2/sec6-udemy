export default function Input({ label, invalid, ...props }) {
  labelClasses =
    "block mb-2 text-xs font-bold tracking-wide uppercase text-stone-300";

  if (invalid) {
    labelClasses =
      "block mb-2 text-xs font-bold tracking-wide uppercase text-red-400";
  }

  return (
    <p>
      <label className={labelClasses}>{label}</label>
      <input
        className="w-full px-3 py-2 leading-tight bg-stone-300 text-gray-700 border rounded shadow"
        {...props}
      />
    </p>
  );
}
