"""
This module is for nbhosting
"""

from nbhosting.courses import (
    Track, Section, Notebook,
    notebooks_by_pattern, track_by_directory)

def tracks(coursedir):
    return [
        Track(coursedir,
              name="D1 : HTML and CSS basics",
              sections=[
                Section(name="the ecosystem",
                        coursedir=coursedir,
                        notebooks=notebooks_by_pattern(coursedir,"notebooks/0*.md")),
                Section(name="html basics",
                        coursedir=coursedir,
                        notebooks=notebooks_by_pattern(coursedir,"notebooks/1*.md")),
                ],
              description="n/a"),
        Track(coursedir,
              name="D2 : CSS layout and intro to JS",
              sections=[
                Section(name="advanced layout",
                        coursedir=coursedir,
                        notebooks=notebooks_by_pattern(coursedir,"notebooks/2*.md")),
                Section(name="intro to JS",
                        coursedir=coursedir,
                        notebooks=notebooks_by_pattern(coursedir,"notebooks/3*.md")),
                ],
              description="n/a"),
        Track(coursedir,
              name="D3 : more on JavaScript",
              sections=[
                Section(name="JS unleashed",
                        coursedir=coursedir,
                        notebooks=notebooks_by_pattern(coursedir,"notebooks/4*.md")),
                Section(name="very popular tools",
                        coursedir=coursedir,
                        notebooks=notebooks_by_pattern(coursedir,"notebooks/5*.md")),
                ],
              description="n/a"),
        Track(coursedir,
              name="Optional content",
              sections=[
                Section(name="optional tools",
                        coursedir=coursedir,
                        notebooks=notebooks_by_pattern(coursedir,"notebooks/6*.md")),
                Section(name="course requirements",
                        coursedir=coursedir,
                        notebooks=notebooks_by_pattern(coursedir,"notebooks/7*.md")),
                ],
              description="n/a"),
        ]
