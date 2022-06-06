empresa = []
produto = []
resposta = "s"

while resposta == "s":
 empresa.append(str(input("Digite o nome da empresa: ")))
 produto.append(int(input("Digite a quantidade de produtos solicitados: ")))
 resposta = input("Digite \"s\" minusculo para continuar:")

for indice in range(0, len(empresa)):
  energetico = 4.50
  print("Empresa..........:", (indice + 1))
  print("Empresa..........:", empresa[indice])
  print("Total............: R$", produto[indice] * energetico)
  print("ICMS.............: R$", (produto[indice] * energetico) * 0.18)
  print("IPI..............: R$", (produto[indice] * energetico) * 0.04)
  print("PIS..............: R$", (produto[indice] * energetico) * 0.0186)
  print("COFINS...........: R$", (produto[indice] * energetico) * 0.0854)
  print(32 * "_")


total = input("Digite \"t\" Para ter o Total: ")
while total == "t":
    energetico = 4.50
    print("Total Mercadorias: R$", sum(produto) * energetico)
    print("Total Imposto: R$", sum(produto) * (energetico) * 0.18 + sum(produto) * (energetico) * 0.04 +
           sum(produto) * (energetico) * 0.0186 + sum(produto) * (energetico) * 0.0854)
    print("Total Geral: R$",sum(produto) * (energetico) + sum(produto) * (energetico) * 0.18 + sum(produto) *
           (energetico) * 0.04 + sum(produto) * (energetico) * 0.0186 + sum(produto) * (energetico) * 0.0854)
    print(32 * "_")
    break
