workflow "issues" {
  on = "issues"
  resolves = ["autolabel"]
}

action "autolabel" {
  uses = "brxxn/autolabel@release"
  secrets = ["GITHUB_TOKEN"]
}