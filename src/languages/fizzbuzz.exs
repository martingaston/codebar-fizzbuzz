defmodule Fizzbuzz do
  defguard divisible_by_3?(n) when rem(n, 3) == 0
  defguard divisible_by_5?(n) when rem(n, 5) == 0

  def print(total), do: Enum.each(1..total, fn x -> IO.puts(fb(x)) end)
  def search(total), do: Enum.each(1..total, fn x -> fb(x) end)

  defp fb(n) when divisible_by_3?(n) and divisible_by_5?(n), do: "FizzBuzz"
  defp fb(n) when divisible_by_5?(n), do: "Buzz"
  defp fb(n) when divisible_by_3?(n), do: "Fizz"
  defp fb(n), do: n
end

Fizzbuzz.print(100)

ExUnit.start()

defmodule FizzbuzzTest do
  use ExUnit.Case

  @first_15 [
    1,
    2,
    "Fizz",
    4,
    "Buzz",
    "Fizz",
    7,
    8,
    "Fizz",
    "Buzz",
    11,
    "Fizz",
    13,
    14,
    "FizzBuzz"
  ]

  test "fizzbuzz_assert", do: assert(Fizzbuzz.search(15) == @first_15)
end
