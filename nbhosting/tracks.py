"""
This module is for nbhosting
"""

from nbhosting.courses import (
    Track, Section, Notebook,
    notebooks_by_pattern, track_by_directory)

def tracks(coursedir):
    return [
        Track(coursedir,
              name="HTML and CSS basics",
              sections=[
                Section(name="the ecosystem",
                        coursedir=coursedir,
                        notebooks=notebooks_by_pattern(coursedir,"notebooks/0*.md")),
                Section(name="html basics",
                        coursedir=coursedir,
                        notebooks=notebooks_by_pattern(coursedir,"notebooks/1*.md")),
                ],
              description="Web frontend introduction"),
        Track(coursedir,
              name="CSS layout and intro to JS",
              sections=[
                Section(name="advanced layout",
                        coursedir=coursedir,
                        notebooks=notebooks_by_pattern(coursedir,"notebooks/2*.md")),
                Section(name="intro to JS",
                        coursedir=coursedir,
                        notebooks=notebooks_by_pattern(coursedir,"notebooks/3*.md")),
                ],
              description="CSS layout - JS intro"),
        ]
