## Contexto

Durante o uso do `templ generate -watch` no meu fluxo diário, notei um problema recorrente:  
arquivos **gerados automaticamente** (como `mage_output_file.go`) disparavam o modo watch, causando **regenerações e reloads desnecessários**.

O comportamento padrão do `templ` utiliza o seguinte `--watch-pattern`:

```regex
(.+\.(go|templ|css|txt|js|png|jpe?g|gif|webp)$)
````

Na prática, isso significa: *qualquer arquivo com essas extensões dispara o watcher* — sem uma forma clara de **excluir casos específicos**.

Foi aí que o problema ficou evidente.

---

## O problema real

À primeira vista, pode parecer que o problema poderia ser resolvido “ajustando a regex”.
Mas isso **não é verdade no contexto do Go**.

O `templ` utiliza o pacote `regexp` da standard library, que segue a especificação **RE2**.
Essa engine **não suporta lookaheads**, em especial *negative lookaheads* como:

```regex
(?!mage_output_file\.go)
```

Em linguagens como JavaScript ou Python, esse tipo de exclusão é trivial.
Em Go, até é matematicamente possível simular algo parecido — mas o resultado é:

* ilegível
* difícil de manter
* propenso a erros
* totalmente hostil para o usuário final

Ou seja: **não era um problema de regex mal escrita**, mas sim de **usabilidade e arquitetura da CLI**.

---

## A necessidade de uma solução melhor

O que o usuário realmente quer expressar é simples:

> “Observe tudo, **menos isso aqui**.”

Do ponto de vista humano, isso é muito mais fácil de raciocinar do que tentar escrever **uma única regex que inclua e exclua ao mesmo tempo**.

Por isso, a solução correta não era “consertar a regex”, mas sim **introduzir uma abstração nova e explícita**.

---

## Proposta: `--ignore-pattern`

Com isso em mente, abri a issue:

* **Issue:** Can we have a `--ignore-pattern` flag for watch mode?
  [https://github.com/a-h/templ/issues/1279](https://github.com/a-h/templ/issues/1279)

A proposta era direta:

* manter o comportamento atual **100% compatível**
* adicionar uma flag opcional para **subtrair arquivos do watch**
* priorizar clareza e previsibilidade

O maintainer concordou rapidamente com a abordagem, o que validou que o problema era real e não apenas um caso isolado.

---

## Processo

Meu fluxo foi intencionalmente conservador:

1. Identificar o problema real (não apenas o sintoma)
2. Abrir uma issue bem delimitada
3. Esperar validação do maintainer
4. Implementar a solução com testes
5. Enviar o PR com descrição clara e objetiva

Nada de “code first, think later”.

---

## Implementação

Após a aprovação da ideia, implementei a solução no PR:

* **Pull Request:** feat: add `--ignore-pattern` flag to generate `-watch`
  [https://github.com/a-h/templ/pull/1280](https://github.com/a-h/templ/pull/1280)

Principais pontos técnicos:

* Introdução do campo `IgnorePattern` no `RecursiveWatcher`
* Atualização do `WalkFiles` e do loop de eventos
* Garantia de que o `--ignore-pattern` **tem precedência** sobre o `--watch-pattern`
* Nenhuma mudança de comportamento quando a flag não é usada

O resultado: uma funcionalidade nova, **sem breaking changes**.

---

## Testes adicionados

Para garantir correção e evitar regressões, adicionei testes específicos:

* `TestWatchIgnoresFilesMatchingIgnorePattern`
* `TestIgnorePatternTakesPrecedenceOverWatchPattern`

Isso cobre tanto o caminho feliz quanto o caso onde padrões entram em conflito.

---

## Resultado

* PR **mergeado**
* Issue **fechada**
* Feature lançada em **v0.3.960**
* Código enxuto, legível e testado

Mais importante do que a feature em si foi o processo:
identificar corretamente o problema, respeitar o fluxo do projeto e entregar uma solução que melhora a experiência de todos.

---

## Imagens do PR em ação

![Ignore pattern flag example](/images/posts/templ-ignore-pattern-1.png)

![Watch mode ignoring files](/images/posts/templ-ignore-pattern-2.png)

---

## Conclusão

Esse é um bom exemplo do tipo de trabalho que eu valorizo:

* resolver a **causa**, não o sintoma
* melhorar **usabilidade**, não apenas código
* manter compatibilidade e previsibilidade
* entregar com testes e documentação implícita

Pequena feature, impacto real.

```

---

Se quiser, no próximo passo posso:
- ajustar o texto para ficar ainda mais **enxuto**
- revisar o vocabulário para alinhar 100% com o restante do site
- escrever a `description` curta do post no mesmo tom do conteúdo
```
