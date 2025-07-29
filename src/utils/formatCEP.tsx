export function formatCep(cep?: string | null) {
  if (!cep) return "Insira o CEP";
  const digits = cep.replace(/\D/g, "");
  if (digits.length !== 8) return cep;
  return `${digits.slice(0, 5)}-${digits.slice(5)}`;
}
