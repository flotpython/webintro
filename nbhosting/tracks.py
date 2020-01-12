"""
This module is for nbhosting
"""

from nbhosting.courses import (
    Track, Section, Notebook,
    notebooks_by_pattern, track_by_directory)

def tracks(coursedir):
    return [
        Track(coursedir,
              name="html basics",
              sections=[
                Section(name="html basics",
                        coursedir=coursedir,
                        notebooks=notebooks_by_pattern(coursedir,"notebooks/1*.md")),
                ],
              description="Intro aux outils Web frontend"),
        ]
