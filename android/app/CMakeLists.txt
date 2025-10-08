cmake_minimum_required(VERSION 3.22.1)
project(MyApp)

add_library(react_featureflagsjni SHARED "")
set_target_properties(react_featureflagsjni PROPERTIES IMPORTED TRUE)
