"""
This module is for nbhosting
"""

from nbhosting.courses import (
    Track, Section, Notebook,
    notebooks_by_pattern, track_by_directory)

def tracks(coursedir):
    return [
        Track(coursedir,
              name="D1 : HTML - CSS basics",
              sections=[
                Section(name="introduction",
                        coursedir=coursedir,
                        notebooks=notebooks_by_pattern(coursedir,"notebooks/0*.md")),
                Section(name="HTML basics",
                        coursedir=coursedir,
                        notebooks=notebooks_by_pattern(coursedir,"notebooks/1*.md")),
                ],
              description="n/a"),
        Track(coursedir,
              name="D2 : CSS layout - JS intro",
              sections=[
                Section(name="advanced layout",
                        coursedir=coursedir,
                        notebooks=notebooks_by_pattern(coursedir,"notebooks/2*.md")),
                Section(name="intro to JS",
                        coursedir=coursedir,
                        notebooks=notebooks_by_pattern(coursedir,"notebooks/3*.md")),
                ],
              description="n/a"),
        Track(coursedir,
              name="D3 : popular tools",
              sections=[
                # Section(name="JS unleashed",
                #        coursedir=coursedir,
                #        notebooks=notebooks_by_pattern(coursedir,"notebooks/4*.md")),
                Section(name="popular tools",
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
