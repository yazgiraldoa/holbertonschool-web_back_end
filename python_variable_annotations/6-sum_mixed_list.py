#!/usr/bin/env python3
"""
Type-annotated function sum_mixed_list
"""
from typing import Union, List


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """
    Type-annotated function sum_list which takes a
    list mxd_lst of integers and floats and returns their sum as a float.
    """
    sum: float = 0
    for number in mxd_lst:
        sum += number
    return sum
